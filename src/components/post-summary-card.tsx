import React from "react";
import { ImageDataLike } from "gatsby-plugin-image";

import { Box } from "@twilio-paste/box";
import { Grid, Column } from "@twilio-paste/grid";

import PostImage from "./post-image";
import PostMeta from "./post-meta";

type Props = {
  id: string;
  title: string;
  type: string;
  slug: string;
  date: string;
  image: ImageDataLike;
  excerpt: string;
  tags?: string[];
  categories?: string[];
};

const PostSummaryCard = ({ slug, title, type, date, image, excerpt, tags, categories }: Props) => {
  return (
    <Box width="100%">
      <Grid gutter={["space30", "space60", "space60"]} vertical={[true, false, false]}>
        <Column span={[12, 4, 4]}>
          <PostImage image={image} alt={title} width={300} />
        </Column>
        <Column span={[12, 8, 8]}>
          <PostMeta link={type === "post" ? `/blog/${slug}` : `/${slug}`} title={title} date={date} excerpt={excerpt} tags={tags} categories={categories} />
        </Column>
      </Grid>
    </Box>
  );
};

export default PostSummaryCard;
