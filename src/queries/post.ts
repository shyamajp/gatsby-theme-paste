import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

interface PageFrontmatter {
  date: number;
  slug: string;
  title: string;
  featuredImage?: ImageDataLike;
}

interface PostFrontmatter extends PageFrontmatter {
  tags?: string[];
  categories?: string[];
  draft?: boolean;
}

export interface Page {
  frontmatter: PostFrontmatter;
  body: string;
}

export interface Post {
  tableOfContents: object;
  frontmatter: PostFrontmatter;
  body: string;
  timeToRead?: string;
}

export const postFragments = graphql`
  fragment PostFrontmatter on MdxFrontmatter {
    title
    slug
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
      }
    }
  }
  fragment PostGroup on MdxGroupConnection {
    fieldValue
    totalCount
  }
`;
