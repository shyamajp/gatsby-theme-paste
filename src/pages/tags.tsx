import React from "react";

import { Heading } from "@twilio-paste/heading";

import { usePostGroups } from "../queries/post";

import Layout from "../components/layout";
import { PostGroupPills } from "../components/common";
import SEO from "../components/seo";

const TagsPage = () => {
  const { tags } = usePostGroups();

  return (
    <Layout>
      <SEO title="Tags" description="Shows a list of tags of all existing posts." />
      <Heading variant="heading10" as="h1">
        Tags
      </Heading>
      <PostGroupPills type="tags" postGroups={tags} />
    </Layout>
  );
};

export default TagsPage;
