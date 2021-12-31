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
