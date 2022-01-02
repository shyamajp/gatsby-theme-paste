import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

type PageFields = {
  slug: string;
};

type PageFrontmatter = {
  date: number;
  title: string;
  featuredImage?: ImageDataLike;
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
