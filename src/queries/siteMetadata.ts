import { useStaticQuery, graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

type MenuLinks = {
  name: string;
  link: string;
};

type Social = {
  name: string;
  url: string;
};

export type SiteMetadata = {
  title: string;
  description: string;
  author: string;
  menuLinks: MenuLinks[];
  social: Social[];
  siteUrl: string;
};

export type UseSiteMetadata = {
  siteMetadata: SiteMetadata;
  avatar: ImageDataLike;
};

export const useSiteMetadata = (): UseSiteMetadata => {
  const { site, avatar } = useStaticQuery(
    graphql`
      query {
        avatar: file(absolutePath: { regex: "/avatar.(jpg|png)$/" }) {
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
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
  return { siteMetadata: site.siteMetadata, avatar };
};
