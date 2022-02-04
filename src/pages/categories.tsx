import React from "react";

import { Heading } from "@twilio-paste/heading";

import { usePostGroups } from "../queries/post";

import Layout from "../components/layout";
import { PostGroupPills, SEO } from "../components/common";

const CategoriesPage = () => {
  const { categories } = usePostGroups();

  return (
    <Layout>
      <SEO title="Categories" description="Shows a list of categories of all existing posts." />
      <Heading variant="heading10" as="h1">
        Categories
      </Heading>
      <PostGroupPills type="categories" postGroups={categories} />
    </Layout>
  );
};

export default CategoriesPage;
