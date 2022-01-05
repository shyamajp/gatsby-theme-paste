import React from "react";

import { Heading } from "@twilio-paste/heading";

import Layout from "../components/layout";
import { PostGroupPills } from "../components/common";
import { usePostGroups } from "../queries/post";

const TagsPage = () => {
  const { tags } = usePostGroups();

  return (
    <Layout>
      <Heading variant="heading10" as="h1">
        Tags
      </Heading>
      <PostGroupPills type="tags" postGroups={tags} />
    </Layout>
  );
};

export default TagsPage;
