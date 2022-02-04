import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

import { useSiteMetadata } from "../../queries/siteMetadata";

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

export const SEO = ({ title, description, image }: Props) => {
  const { pathname } = useLocation();
  const {
    siteMetadata: { title: defaultTitle, description: defaultDescription, siteUrl, author },
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
    // icon: `${siteUrl}${icon}`
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={author.name} />

      {/* {icon && <meta rel="icon" href={seo.icon} type="image/x-icon" />} */}
      {/* {icon && <meta rel="shortcut icon" href={seo.icon} type="image/x-icon" />} */}

      {image && <meta name="image" content={seo.image} />}
      {image && <meta name="thumnail" content={seo.image} />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};
