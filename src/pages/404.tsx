import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { PasteLink } from "../components/common";

const NotFound = () => {
  return (
    <Layout>
      <SEO title="Not Found" description="Page Not Found" />
      <h1>Not Found</h1>
      Go back to <PasteLink to="/">Home</PasteLink>
    </Layout>
  );
};

export default NotFound;
