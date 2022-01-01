import { useStaticQuery, graphql } from "gatsby";

type MenuLinks = {
  name: string;
  link: string;
};

type Social = {
  name: string;
  url: string;
};

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  menuLinks: MenuLinks[];
  social: Social[];
  siteUrl: string;
}

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            menuLinks {
              name
              link
            }
            social {
              name
              url
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
