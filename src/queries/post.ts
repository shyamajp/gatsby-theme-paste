import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

interface PostFrontmatter {
  date: number;
  slug: string;
  title: string;
  type: string;
  tags?: string[];
  categories?: string[];
  featuredImage?: ImageDataLike;
  draft?: boolean;
}

export interface Post {
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
