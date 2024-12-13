export const NAVIGATION_LINKS_ENUM = {
  HOME: {
    title: "Home",
    href: "/",
  },
  STORIES: {
    title: "Stories",
    href: "/stories",
  },
  FEATURES: {
    title: "Features",
    href: "/features",
  },
  PRICING: {
    title: "Pricing",
    href: "/pricing",
  },
  GET_INVITATION: {
    title: "Get an invite",
    href: "/get-invitation",
  },
} as const;

export const HEADER_NAVIGATION_LINKS = [
  { ...NAVIGATION_LINKS_ENUM.HOME },
  { ...NAVIGATION_LINKS_ENUM.STORIES },
  { ...NAVIGATION_LINKS_ENUM.FEATURES },
  { ...NAVIGATION_LINKS_ENUM.PRICING },
];
