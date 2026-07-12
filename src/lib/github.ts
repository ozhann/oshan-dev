export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type ContributionWeek = {
  days: ContributionDay[];
};

export type ContributionCalendar = {
  total: number;
  weeks: ContributionWeek[];
};

type GraphQLDay = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
};

const LEVEL_MAP: Record<GraphQLDay["contributionLevel"], ContributionDay["level"]> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

function emptyCalendar(): ContributionCalendar {
  const weeks: ContributionWeek[] = [];
  const today = new Date();
  const start = new Date(today);
  start.setDate(start.getDate() - 364);
  // Align to Sunday
  start.setDate(start.getDate() - start.getDay());

  let cursor = new Date(start);
  while (cursor <= today || weeks.length < 53) {
    const days: ContributionDay[] = [];
    for (let i = 0; i < 7; i++) {
      days.push({
        date: cursor.toISOString().slice(0, 10),
        count: 0,
        level: 0,
      });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push({ days });
    if (weeks.length >= 53 && cursor > today) break;
  }

  return { total: 0, weeks };
}

export async function fetchContributionCalendar(
  username: string,
  token?: string,
): Promise<ContributionCalendar> {
  const authToken = token || import.meta.env.GITHUB_TOKEN || process.env.GITHUB_TOKEN;

  if (!authToken) {
    console.warn("GITHUB_TOKEN missing — rendering empty contribution heatmap.");
    return emptyCalendar();
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
        "User-Agent": "oshan-dev-portfolio",
      },
      body: JSON.stringify({ query, variables: { login: username } }),
    });

    if (!response.ok) {
      console.warn(`GitHub GraphQL failed: ${response.status}`);
      return emptyCalendar();
    }

    const json = (await response.json()) as {
      data?: {
        user?: {
          contributionsCollection?: {
            contributionCalendar?: {
              totalContributions: number;
              weeks: { contributionDays: GraphQLDay[] }[];
            };
          };
        };
      };
      errors?: unknown;
    };

    const calendar = json.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) {
      console.warn("GitHub GraphQL returned no calendar data.", json.errors);
      return emptyCalendar();
    }

    return {
      total: calendar.totalContributions,
      weeks: calendar.weeks.map((week) => ({
        days: week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: LEVEL_MAP[day.contributionLevel] ?? 0,
        })),
      })),
    };
  } catch (error) {
    console.warn("Failed to fetch GitHub contributions:", error);
    return emptyCalendar();
  }
}

export function monthLabels(weeks: ContributionWeek[]): { label: string; index: number }[] {
  const labels: { label: string; index: number }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, index) => {
    const first = week.days[0];
    if (!first) return;
    const month = new Date(`${first.date}T00:00:00`).getMonth();
    if (month !== lastMonth) {
      labels.push({
        label: new Date(`${first.date}T00:00:00`).toLocaleString("en", {
          month: "short",
        }),
        index,
      });
      lastMonth = month;
    }
  });

  return labels;
}
