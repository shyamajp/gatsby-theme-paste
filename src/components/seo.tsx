import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

import { useSiteMetadata } from "../queries/siteMetadata";

type Props = {
  title: string;
  description: string;
  image?: string;
};

const SEO = ({ title, description, image }: Props) => {
  const { pathname } = useLocation();
  const {
    siteMetadata: { title: defaultTitle, description: defaultDescription, siteUrl },
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {/* {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />} */}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;
