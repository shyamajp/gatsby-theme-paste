import React from "react";

import { Heading } from "@twilio-paste/heading";

import Layout from "../components/layout";
import { PostGroupPills } from "../components/common";
import { usePostGroups } from "../queries/post";

const CategoriesPage = () => {
  const { categories } = usePostGroups();

  return (
    <Layout>
      <Heading variant="heading10" as="h1">
        Categories
      </Heading>
      <PostGroupPills type="categories" postGroups={categories} />
    </Layout>
  );
};

export default CategoriesPage;
