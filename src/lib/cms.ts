import type { Page_Pagecontent_Content_FeaturedStories } from "@/__generated__/graphql";

export const extractFeaturedStories = (
  stories?: Page_Pagecontent_Content_FeaturedStories,
) => {
  if (!stories || !stories.storyRepeater) return [];

  return stories.storyRepeater.map(
    (story) => story?.featuredStory?.content?.storyPreview?.storyPreviewContent,
  );
};
