# Gatsby Theme for Paste

A Gatsby blog theme using [Paste](https://paste.twilio.design/) with high accecibility and inclusion.

> NOTE: This is NOT an official Gatsby theme provided by Twilio.

## Installation

### For a new site

If you want to create a new site with this theme, run the command below. This will generate a new site with all necessary configurations.

```shell
gatsby new my-paste-blog https://github.com/shyamajp/gatsby-theme-paste-starter
```

### For an existing site

1. Install the theme

```shell
  npm install gatsby-theme-paste
```

2. Add the configuration to your `gatsby-config.js` file

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-paste`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
};
```

3. Add blog posts to your site by creating md or mdx files inside `/content/posts` or your customised `contentPath`.

4. Run your site.

```
gatsby develop
```

> By default, your site will be running at http://localhost:8000.

## Usage

This is an example project structure

### Project Structure

```
📂 my-paste-blog
+---📜 gatsby-config.js
+---📜 package.json
│
+---📂 content
    +---📂 assets
    │   +---🖼️ avatar.png
    │   +---🖼️ default.jpg
    │   +---🖼️ main.jpg
    │
    +---📂pages
    │   +---📜 about.md
    │   +---📜 contact.md
    │   +---📜 privacy-and-policy.md
    │
    +---📂post
    +---📜 my-first-blog.md
    +---📜 my-second-blog.mdx
    +---📂 my-third-blog
        +---📜 blog-content.mdx
        +---🖼️ blog-image.jpg
```

### Theme options

| Key         | Default value | Description                                      |
| ----------- | ------------- | ------------------------------------------------ |
| basePath    | /             | Root url for all blog posts                      |
| contentPath | content/posts | Location of blog posts                           |
| limit       | 1000          | Set the amount of pages that should be generated |

#### Example Usage

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-paste",
      options: {
        // basePath defaults to `/`
        basePath: "/blog",
        // number of posts in one page
        postsPerPage: 10,
      },
    },
  ],
};
```

### Site Metadata Configuration

| Key                | Type   | Description                                       |
| ------------------ | ------ | ------------------------------------------------- |
| title              | String | Site title for SEO                                |
| description        | String | Site description for SEO                          |
| author             |        | Author detail displayed in the sidebar and footer |
| author.name        | String | Name of the author                                |
| author.description | String | Description of the author                         |
| siteUrl            | String | Site url                                          |
| menuLinks          | []     | Menu items displayed in the header                |
| menuLinks.name     | String | Name of the menu item                             |
| menuLinks.link     | String | Link of the menu item                             |
| quickLinks         | []     | Quick link items displayed in the footer          |
| quickLinks.name    | String | Name of the quick link item                       |
| quickLinks.link    | String | Link of the quick link item                       |
| social             | []     | Social links displayed in the sidebar and footer  |
| social.name        | String | Name of the social site                           |
| social.url         | String | Url of the social site                            |

In addition to the theme options, there are a handful of items you can customize via the siteMetadata object in your site's `gatsby-config.js`.

#### Example Usage

```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for SEO
    title: "My Blog Title",
    description: "My site description",
    // Used for SEO in the footer and sidebar
    author: {
      name: "shyamajp",
      description: "I love technologies!",
    },
    // Used for resolving images in social cards
    siteUrl: "https://example.com",
    // Used for internal links in the header
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
    ],
    // Used for quick links in the footer
    quickLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Tags",
        link: "/tags",
      },
      {
        name: "Categories",
        link: "/about",
      },
    ],
    // Used for social links in the footer and sidebar
    social: [
      {
        name: "Twitter",
        url: "https://twitter.com/gatsbyjs",
      },
      {
        name: "GitHub",
        url: "https://github.com/gatsbyjs",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
      },
    ],
  },
};
```

### Blog Post Fields

The following are the defined blog post fields based on the node interface in the schema

| Field    | Type             |
| -------- | ---------------- |
| title    | String           |
| body     | String           |
| date     | Date             |
| tags     | String[]         |
| excerpt  | String           |
| image    | String           |
| imageAlt | String           |
| type     | "post" or "page" |

An example markdown looks like the following:

```md
---
title: "Blog title"
date: 2022-01-01
image: "./blog-image.jpg"
description: "This is just an example description."
categories:
  - "technologies"
  - "tutorial"
tags:
  - "react"
  - "gatsby"
type: "post"
---

# Yay

This blog renders!
```

## Contributions

_TBA_

### Report a bug

via Issues

### Open a discussion

via Discussions

### Make a contribution

via PR

## License

[MIT](./LICENSE)
