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
  author: { name: string; description: string };
  menuLinks: MenuLinks[];
  social: Social[];
  siteUrl: string;
};

export type UseSiteMetadata = {
  siteMetadata: SiteMetadata;
  avatar: ImageDataLike;
  defaultImage: ImageDataLike;
};

export const useSiteMetadata = (): UseSiteMetadata => {
  const { site, avatar, defaultImage } = useStaticQuery(
    graphql`
      query {
        avatar: file(absolutePath: { regex: "/avatar.(jpg|png)$/" }) {
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
        defaultImage: file(absolutePath: { regex: "/default.(jpg|png)$/" }) {
          childImageSharp {
            gatsbyImageData(width: 600, placeholder: BLURRED)
          }
        }
        site {
          siteMetadata {
            title
            author {
              name
              description
            }
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
  return { siteMetadata: site.siteMetadata, avatar, defaultImage };
};
