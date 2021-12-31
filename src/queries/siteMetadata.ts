type MenuLinks = {
  name: string;
  link: string;
};

type Social = {
  name: string;
  url: string;
};

export interface SiteMetadata {
  title: string;
  author: string;
  menuLinks: MenuLinks[];
  social: Social[];
}
