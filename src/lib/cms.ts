import type {
  Page_Pagecontent_Content_FeaturedStories,
  Page_Pagecontent_Content_FeaturesSection,
} from "@/__generated__/graphql";

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
