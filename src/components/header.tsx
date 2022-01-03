import React from "react";
import { navigate } from "gatsby";

import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import { Button } from "@twilio-paste/button";
import { Text } from "@twilio-paste/text";
import { Paragraph } from "@twilio-paste/paragraph";
import { Flex } from "@twilio-paste/flex";
import { Menu, MenuButton, MenuItem, useMenuState } from "@twilio-paste/menu";
import { Modal, ModalHeader, ModalHeading, ModalBody } from "@twilio-paste/modal";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";

import { SiteMetadata } from "../queries/siteMetadata";

import { Search } from "./search";
import { PasteLink } from "./common";
import { Device, useDevice } from "../hooks/device";

type Props = Pick<SiteMetadata, "title" | "menuLinks">;

const Header = ({ title, menuLinks }: Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const menu = useMenuState();
  const device = useDevice();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space40" position="sticky" top={0} width="100%" zIndex="zIndex10">
      <Flex vAlignContent="center" hAlignContent="between">
        {device < Device.L ? (
          <>
            <MenuButton {...menu} variant="reset" size="reset">
              <MoreIcon decorative={false} title="Show Menu" color="colorTextBrandInverse" />
            </MenuButton>
            <Menu {...menu} aria-label="Preferences">
              {menuLinks.map((menuLink) => (
                <MenuItem key={menuLink.link} {...menu} onClick={() => navigate(menuLink.link)}>
                  {menuLink.name}
                </MenuItem>
              ))}
            </Menu>
            <PasteLink to="/">
              <Text color="colorTextInverse" as="h1" fontSize="fontSize80">
                {title}
              </Text>
            </PasteLink>
            <Button variant="reset" size="reset" onClick={handleOpen}>
              <SearchIcon decorative={false} title="Search" color="colorTextBrandInverse" />
            </Button>
          </>
        ) : (
          <>
            <PasteLink to="/">
              <Text color="colorTextInverse" as="h1" fontSize="fontSize80">
                {title}
              </Text>
            </PasteLink>
            <Stack orientation="horizontal" spacing="space40">
              {menuLinks.map((menuLink) => (
                <PasteLink to={menuLink.link} key={menuLink.link}>
                  <Text color="colorTextInverse" as="span" fontSize="fontSize40">
                    {menuLink.name}
                  </Text>
                </PasteLink>
              ))}
              <Search />
            </Stack>
          </>
        )}
        <Modal isOpen={isOpen} size="default" ariaLabelledby="search-modal" onDismiss={handleClose}>
          <ModalHeader>
            <ModalHeading as="h3">Search</ModalHeading>
          </ModalHeader>
          <ModalBody>
            <Flex vertical hAlignContent="center">
              <Search />
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis rem quidem, repudiandae voluptate modi et possimus cumque voluptatibus hic, eum consequuntur assumenda. Vero a
                eum illo explicabo, dignissimos dolores.
              </Paragraph>
            </Flex>
          </ModalBody>
        </Modal>
      </Flex>
    </Box>
  );
};

export default Header;
