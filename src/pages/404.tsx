import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";

const NotFound = () => {
  return (
    <Layout>
      <h1>Not Found</h1>
      Go back to <Link to="/">Home</Link>
    </Layout>
  );
};

export default NotFound;
