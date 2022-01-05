import React from "react";

import { Heading } from "@twilio-paste/heading";
import { DisplayPillGroup } from "@twilio-paste/display-pill-group";

import Layout from "../components/layout";
import { TagPill } from "../components/common";
import { usePostGroups } from "../queries/post";

const TagsPage = () => {
  const { tags } = usePostGroups();

  return (
    <Layout>
      <Heading variant="heading10" as="h1">
        Tags
      </Heading>
      <DisplayPillGroup aria-label="tags">
        {tags.map((tag) => (
          <TagPill key={tag.fieldValue} to={`/tags/${tag.fieldValue.toLowerCase()}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </TagPill>
        ))}
      </DisplayPillGroup>
    </Layout>
  );
};

export default TagsPage;
