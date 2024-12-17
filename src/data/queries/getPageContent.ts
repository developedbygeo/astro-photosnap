export const GET_PAGE_CONTENT_QUERY = (pageId: string) => `query HomePageQuery {
  page(id: "${pageId}") {
    pageContent {
      content {
        ... on Page_Pagecontent_Content_SplitSection {
          link {
            target
            title
            url
          }
          image {
            altText
            title
            sourceUrl
            srcSet
          }
          textSection {
            background
            text
            title
          }
          hasDecoration
          imagePosition
        }
      }
    }
  }
}`;
