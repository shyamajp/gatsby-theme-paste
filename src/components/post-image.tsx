import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import { useSiteMetadata } from "../queries/siteMetadata";
import { PostFrontmatter } from "../queries/post";

type Props = Pick<PostFrontmatter, "image"> & {
  alt: string;
};

const PostImage = ({ image, alt }: Props) => {
  const { defaultImage } = useSiteMetadata();

  const postImage = getImage(image);
  const defaultPostImage = getImage(defaultImage);

  return postImage || defaultPostImage ? <GatsbyImage image={postImage || defaultPostImage} alt={alt} /> : <StaticImage src="../../static/default.jpg" alt={alt} />;
};

export default PostImage;
