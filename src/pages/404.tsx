import React from "react";

import { Heading } from "@twilio-paste/heading";

import Layout from "../components/layout";
import SEO from "../components/seo";
import EmptyState from "../components/empty-state";
import { PasteLink } from "../components/common";

const NotFound = () => {
  return (
    <Layout>
      <SEO title="Not Found" description="Page Not Found" />
      <Heading variant="heading10" as="h1">
        Page Not Found
      </Heading>
      <EmptyState title="No page registered at this url" description="This page does not exist." action={<PasteLink to="/">Back to Home</PasteLink>} />
    </Layout>
  );
};

export default NotFound;
