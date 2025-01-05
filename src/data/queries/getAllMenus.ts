export const GET_ALL_MENUS_CONTENT_QUERY = `query GetAllMenus {
  customMenus {
    nodes {
      databaseId
      socialMediaContent {
        content {
          platform
          link {
            title
            target
            url
          }
        }
      }
      menuLinksContent {
        menuLinks {
          menuLink {
            target
            title
            url
          }
          enableCtaStyling
        }
      }
    }
  }
}`;
