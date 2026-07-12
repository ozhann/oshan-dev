export const site = {
  name: "Özhan Yilmaz",
  title: "Senior Software Engineer",
  location: "Berlin, Germany",
  tagline:
    "Full-stack engineer with 10+ years across FinTech, eCommerce, and live event operations.",
  bio: "I build reliable product surfaces with Laravel and React — from regulated consumer finance to on-site accreditation workflows. Currently at The Event Verse in Berlin.",
  email: "ozhanyilmaz@gmail.com",
  photo: "/photo.jpg",
  url: "https://ozhan.xyz",
  githubUsername: "ozhann",
  socials: [
    { label: "GitHub", href: "https://github.com/ozhann" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ozhanyilmazz/" },
    { label: "X", href: "https://x.com/ozhan_dev" },
    { label: "Email", href: "mailto:ozhanyilmaz@gmail.com" },
  ],
  projects: [
    {
      name: "The Event Verse",
      tag: "Senior Software Engineer · Live events",
      description:
        "Laravel + React platform for accreditation, logistics, and on-site coordination.",
      href: null as string | null,
    },
    {
      name: "Riverty",
      tag: "Software Engineer · FinTech",
      description:
        "Consumer finance features for 1.2M+ users across DACH, Benelux, and Nordics.",
      href: "https://www.riverty.com" as string | null,
    },
    {
      name: "Petsdeli",
      tag: "Frontend Engineer · eCommerce",
      description:
        "High-traffic React/Next.js storefront and conversion-focused shopping flows.",
      href: "https://www.petsdeli.de" as string | null,
    },
    {
      name: "Tavla",
      tag: "Personal · TypeScript",
      description: "A premium Turkish backgammon experience on the web.",
      href: "https://github.com/ozhann/vibe-backgammon" as string | null,
    },
  ],
} as const;
