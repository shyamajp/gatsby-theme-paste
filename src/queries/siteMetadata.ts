import { useStaticQuery, graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

type internalLink = {
  name: string;
  link: string;
};

export type SocialLink = {
  name: string;
  url: string;
};

export type SiteMetadata = {
  title: string;
  description: string;
  author: { name: string; description: string };
  menuLinks: internalLink[];
  quickLinks: internalLink[];
  social: SocialLink[];
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
            description
            siteUrl
            author {
              name
              description
            }
            menuLinks {
              name
              link
            }
            quickLinks {
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
