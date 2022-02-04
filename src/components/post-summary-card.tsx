import React from "react";

import { Box } from "@twilio-paste/box";
import { Grid, Column } from "@twilio-paste/grid";

import PostImage from "./post-image";
import PostMeta from "./post-meta";
import { SearchResult } from "../pages/search";

const PostSummaryCard = ({ slug, title, type, date, image, excerpt, tags, categories }: SearchResult) => {
  return (
    <Box width="100%">
      <Grid gutter={["space30", "space60", "space60"]} vertical={[true, false, false]}>
        <Column span={[12, 4, 4]}>
          <PostImage image={image} alt={title} />
        </Column>
        <Column span={[12, 8, 8]}>
          <PostMeta link={type === "post" ? `/blog/${slug}` : `/${slug}`} title={title} date={date} excerpt={excerpt} tags={tags} categories={categories} />
        </Column>
      </Grid>
    </Box>
  );
};

export default PostSummaryCard;
