export const site = {
  name: "Danial Dirar",
  fullName: "Md. Danial Dirar",
  handle: "danial",
  role: "ML & Software Engineer",
  tagline: "Machine Learning · Generative AI · Local AI for business",
  description:
    "Portfolio and blog of Md. Danial Dirar — a computer-science engineer working on machine learning, generative AI, and local AI tailored for businesses.",
  url: "https://danialdirar.dev",
  email: "danieldirar@protonmail.com",
  location: "Dhaka, Bangladesh · Remote worldwide",
  social: {
    github: "https://github.com/Danial-Dirar",
    scholar: "https://scholar.google.com/citations?user=OeiDTrwAAAAJ&hl=en",
    orcid: "https://orcid.org/0009-0002-4081-4175",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;
