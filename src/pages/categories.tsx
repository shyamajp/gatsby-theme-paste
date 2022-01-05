import React from "react";

import { Heading } from "@twilio-paste/heading";
import { DisplayPillGroup } from "@twilio-paste/display-pill-group";

import Layout from "../components/layout";
import { CategoryPill } from "../components/common";
import { usePostGroups } from "../queries/post";

const CategoriesPage = () => {
  const { categories } = usePostGroups();

  return (
    <Layout>
      <Heading variant="heading10" as="h1">
        Categories
      </Heading>
      <DisplayPillGroup aria-label="tags">
        {categories.map((category) => (
          <CategoryPill key={category.fieldValue} to={`/categories/${category.fieldValue.toLowerCase()}/`}>
            {category.fieldValue} ({category.totalCount})
          </CategoryPill>
        ))}
      </DisplayPillGroup>
    </Layout>
  );
};

export default CategoriesPage;
