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
    { label: "Instagram", href: "https://www.instagram.com/ozhanyilmaz/" },
    { label: "Email", href: "mailto:ozhanyilmaz@gmail.com" },
  ],
  projects: [
    {
      name: "The Event Verse",
      tag: "Senior Software Engineer · Live events",
      description:
        "Accreditation, logistics, and on-site coordination platform — remote role with a UK company.",
      href: null as string | null,
    },
    {
      name: "Riverty",
      tag: "Software Engineer · FinTech",
      description:
        "Consumer finance product features for 1.2M+ users across DACH, Benelux, and Nordics.",
      href: null as string | null,
    },
    {
      name: "Petsdeli",
      tag: "Frontend Engineer · eCommerce",
      description:
        "High-traffic storefront work focused on shopping flows and conversion.",
      href: null as string | null,
    },
  ],
} as const;
