import React from "react";

import { Box } from "@twilio-paste/box";
import { Flex } from "@twilio-paste/flex";
import { Grid, Column } from "@twilio-paste/grid";

import { Post } from "../queries/post";

import { Pagination, PaginationProps } from "./common";
import PostCard from "./post-card";

type Props = {
  edges: { node: Pick<Post, "frontmatter" | "fields" | "excerpt"> }[];
  pagination: PaginationProps;
};

const PostList = ({ edges, pagination }: Props) => {
  return (
    <Box>
      <Grid vertical={[true, false, false]} equalColumnHeights gutter="space60">
        {edges.map(({ node }) => (
          <Column span={[12, 6, 6]} key={node.fields.slug}>
            <PostCard post={node} key={node.fields.slug} />
          </Column>
        ))}
      </Grid>
      <Flex paddingY="space60" hAlignContent="center">
        <Pagination {...pagination} />
      </Flex>
    </Box>
  );
};

export default PostList;
