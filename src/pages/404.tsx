import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFound = () => {
  return (
    <Layout>
      <SEO title="Not Found" description="Page Not Found" />
      <h1>Not Found</h1>
      Go back to <Link to="/">Home</Link>
    </Layout>
  );
};

export default NotFound;
