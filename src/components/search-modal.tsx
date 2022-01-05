import React from "react";
import { Modal, ModalHeader, ModalHeading, ModalBody } from "@twilio-paste/modal";
import { Box } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import { Paragraph } from "@twilio-paste/paragraph";
import { Flex } from "@twilio-paste/flex";

import SearchBar from "./search-bar";
import { PasteLink } from "./common";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const SearchModal = ({ isOpen, handleClose }: Props) => {
  return (
    <Modal isOpen={isOpen} size="default" ariaLabelledby="search-modal" onDismiss={handleClose}>
      <ModalHeader>
        <ModalHeading as="h3">Search</ModalHeading>
      </ModalHeader>
      <ModalBody>
        <Flex vertical hAlignContent="center">
          <Box marginTop="space40" marginBottom="space60">
            <SearchBar handleClose={handleClose} />
          </Box>
          <Paragraph>
            Type something relevant to the post(s) you are looking for. This search feature will go through <Text as="b">title</Text> and <Text as="b">body</Text> of every single post. Alternatively,
            you can also filter posts by <PasteLink to="/categories">categories</PasteLink> or <PasteLink to="/tags">tags</PasteLink>.
          </Paragraph>
        </Flex>
      </ModalBody>
    </Modal>
  );
};

export default SearchModal;
