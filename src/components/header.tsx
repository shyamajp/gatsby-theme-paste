import React from "react";
import { Link, navigate } from "gatsby";

import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import { Button } from "@twilio-paste/button";
import { Text } from "@twilio-paste/text";
import { Flex } from "@twilio-paste/flex";
import { Menu, MenuButton, MenuItem, useMenuState, MenuGroup } from "@twilio-paste/menu";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";

import { SiteMetadata } from "../queries/siteMetadata";
import { Device, useDevice } from "../hooks/device";

import SearchBar from "./search-bar";
import SearchModal from "./search-modal";

type Props = Pick<SiteMetadata, "title" | "menuLinks">;

const Header = ({ title, menuLinks }: Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const menu = useMenuState();
  const device = useDevice();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Box backgroundColor="colorBackgroundBodyInverse" position="sticky" top={0} width="100%" zIndex="zIndex10">
      <Flex vAlignContent="center" hAlignContent="between" height={72} paddingX="space80">
        {device < Device.L ? (
          <>
            <MenuButton {...menu} variant="reset" size="reset">
              <MoreIcon decorative={false} title="Show Menu" color="colorTextBrandInverse" size="sizeIcon60" />
            </MenuButton>
            <Menu {...menu} aria-label="Preferences">
              <MenuGroup label="Site Pages">
                {menuLinks.map((menuLink) => (
                  <MenuItem key={menuLink.link} {...menu} onClick={() => navigate(menuLink.link)}>
                    {menuLink.name}
                  </MenuItem>
                ))}
              </MenuGroup>
              <MenuGroup label="Posts">
                <MenuItem {...menu} onClick={() => navigate("/categories")}>
                  Categories
                </MenuItem>
                <MenuItem {...menu} onClick={() => navigate("/tags")}>
                  Tags
                </MenuItem>
              </MenuGroup>
            </Menu>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Text color="colorTextInverse" as="h1" fontSize="fontSize80" _hover={{ color: "colorTextInverseWeak" }}>
                {title}
              </Text>
            </Link>
            <Button variant="reset" size="reset" onClick={handleOpen}>
              <SearchIcon decorative={false} title="Search" color="colorTextBrandInverse" size="sizeIcon60" />
            </Button>
          </>
        ) : (
          <>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Text color="colorTextInverse" as="h1" fontSize="fontSize80" _hover={{ color: "colorTextInverseWeak" }}>
                {title}
              </Text>
            </Link>
            <Stack orientation="horizontal" spacing="space60">
              {menuLinks.map((menuLink) => (
                <Link to={menuLink.link} key={menuLink.link} style={{ textDecoration: "none" }}>
                  <Text color="colorTextInverse" as="span" fontSize="fontSize60" _hover={{ color: "colorTextInverseWeak" }}>
                    {menuLink.name}
                  </Text>
                </Link>
              ))}
              <SearchBar handleClose={handleClose} />
            </Stack>
          </>
        )}
        <SearchModal isOpen={isOpen} handleClose={handleClose} />
      </Flex>
    </Box>
  );
};

export default Header;
