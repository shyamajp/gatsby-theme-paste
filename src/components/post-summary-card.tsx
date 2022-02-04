import React from "react";
import { navigate } from "gatsby";

import { Box } from "@twilio-paste/box";
import { Grid, Column } from "@twilio-paste/grid";

import PostImage from "./post-image";
import PostMeta from "./post-meta";
import { SearchResult } from "../pages/search";

const PostSummaryCard = ({ slug, title, type, date, image, excerpt, tags, categories }: SearchResult) => {
  const link = type === "post" ? `/blog/${slug}` : `/${slug}`;

  return (
    <Box
      width="100%"
      onClick={() => navigate(link)}
      _hover={{
        backgroundColor: "colorBackground",
      }}
      padding="space60"
    >
      <Grid gutter="space30" vertical={[true, false, false]}>
        <Column span={[12, 6, 4]}>
          <PostImage image={image} alt={title} />
        </Column>
        <Column span={[12, 6, 8]}>
          <PostMeta link={link} title={title} date={date} excerpt={excerpt} tags={tags} categories={categories} />
        </Column>
      </Grid>
    </Box>
  );
};

export default PostSummaryCard;
