import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

import { PostGroup } from "../types";

type PageFields = {
  slug: string;
};

type PageFrontmatter = {
  date: number;
  title: string;
  image?: ImageDataLike;
};

type PostFrontmatter = PageFrontmatter & {
  tags?: string[];
  categories?: string[];
};

export type Page = {
  fields: PageFields;
  frontmatter: PostFrontmatter;
  body: string;
  excerpt: string;
};

export type Post = {
  fields: PageFields;
  frontmatter: PostFrontmatter;
  body: string;
  timeToRead: number;
  excerpt: string;
};

export const postFragments = graphql`
  fragment PostFrontmatter on MdxFrontmatter {
    title
    tags
    categories
    image {
      childImageSharp {
        gatsbyImageData(width: 600, placeholder: BLURRED)
      }
    }
    date(formatString: "MMMM DD, YYYY")
  }
  fragment PostSummary on MdxConnection {
    totalCount
    edges {
      node {
        frontmatter {
          ...PostFrontmatter
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
  fragment PostGroup on MdxGroupConnection {
    fieldValue
    totalCount
  }
`;

type UsePostGroups = {
  categories: PostGroup[];
  tags: PostGroup[];
};

export const usePostGroups = (): UsePostGroups => {
  const { categories, tags } = useStaticQuery(
    graphql`
      query {
        categories: allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
          group(field: frontmatter___categories) {
            ...PostGroup
          }
        }
        tags: allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
          group(field: frontmatter___tags) {
            ...PostGroup
          }
        }
      }
    `
  );
  return { categories: categories.group, tags: tags.group };
};
