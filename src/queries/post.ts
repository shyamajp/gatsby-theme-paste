import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

import { PostGroup } from "../types";
import { sortByTotalCount } from "../utils";

export type PageFields = {
  slug: string;
};

export type PageFrontmatter = {
  date: string;
  title: string;
  type: string;
  image?: ImageDataLike;
};

export type PostFrontmatter = PageFrontmatter & {
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

export type PostGroups = {
  categories: PostGroup[];
  tags: PostGroup[];
};

export type ExtendedPostGroups = PostGroups | Pick<PostFrontmatter, "tags" | "categories">;

export const usePostGroups = (): PostGroups => {
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
  return { categories: categories.group.sort(sortByTotalCount), tags: tags.group.sort(sortByTotalCount) };
};
