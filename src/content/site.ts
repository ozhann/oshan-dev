export const site = {
  name: "Özhan Yilmaz",
  title: "Senior Software Engineer",
  location: "Berlin, Germany",
  tagline:
    "Full-stack engineer with 10+ years building products across FinTech, eCommerce, and live operations.",
  bio: "I build product experiences with AI-assisted workflows — shipping reliable features with Laravel and React, from regulated finance to accreditation tools.",
  email: "ozhanyilmaz@gmail.com",
  photo: "/photo.jpg",
  url: "https://ozhan.xyz",
  githubUsername: "ozhann",
  socials: [
    { label: "GitHub", href: "https://github.com/ozhann" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ozhanyilmazz/" },
    { label: "X", href: "https://x.com/ozhan_dev" },
    { label: "Instagram", href: "https://www.instagram.com/ozhanyilmaz_/" },
    { label: "Email", href: "mailto:ozhanyilmaz@gmail.com" },
  ],
  projects: [
    {
      name: "The Event Verse",
      role: "Senior Software Engineer",
      industry: "Live events",
      href: null as string | null,
    },
    {
      name: "Riverty",
      role: "Software Engineer",
      industry: "FinTech",
      href: null as string | null,
    },
    {
      name: "Petsdeli",
      role: "Frontend Engineer",
      industry: "eCommerce",
      href: null as string | null,
    },
  ],
} as const;
