import type {
  AcfLink,
  CustomMenu,
  CustomMenu_Menulinkscontent_MenuLinks,
  Maybe,
  Page_Pagecontent_Content_FeaturedStories,
  Page_Pagecontent_Content_FeaturesSection,
} from "@/__generated__/graphql";
import type { WP_COMPONENT_IDS } from "@/data/misc";

export const extractFeaturedStories = (
  stories?: Page_Pagecontent_Content_FeaturedStories,
) => {
  if (!stories || !stories.storyRepeater) return [];

  return stories.storyRepeater.map(
    (story) => story?.featuredStory?.content?.storyPreview?.storyPreviewContent,
  );
};

export const extractTopFeatures = (
  features?: Page_Pagecontent_Content_FeaturesSection,
) => {
  if (!features || !features.featureRepeater) return [];

  return features.featureRepeater.map((feature) => feature?.content);
};

export const extractMenuById = (
  allMenuData: CustomMenu[] | undefined,
  menuDatabaseId: (typeof WP_COMPONENT_IDS)[keyof typeof WP_COMPONENT_IDS],
) => {
  const locatedMenu = allMenuData?.find(
    (menu) => menu.databaseId === Number(menuDatabaseId),
  );

  return locatedMenu;
};

export const splitLinksByCtaStyling = (
  links: Maybe<Maybe<CustomMenu_Menulinkscontent_MenuLinks>[]>,
) => {
  if (!links) return { ctaStyledLinks: [], regularLinks: [] };

  return links?.reduce<{
    ctaStyledLinks: AcfLink[];
    regularLinks: AcfLink[];
  }>(
    (acc, link) => {
      if (link && link.menuLink && link.enableCtaStyling === true) {
        acc.ctaStyledLinks.push(link.menuLink);
      } else if (link && link.menuLink) {
        acc.regularLinks.push(link.menuLink);
      }
      return acc;
    },
    { ctaStyledLinks: [], regularLinks: [] },
  );
};
