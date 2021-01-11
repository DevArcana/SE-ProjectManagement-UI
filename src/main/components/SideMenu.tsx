import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { FaIndent } from "react-icons/fa";
import { UserMenu } from "./UserMenu";
import { SideButtons } from "./SideButtons";
function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      <Button
        color="blue.300"
        colorScheme="transparent"
        onClick={onOpen}
        size="lg"
        justifyContent="center"
        _hover={{ fontSize: "2xl" }}
      >
        {<FaIndent />}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        variant="persistent"
        trapFocus={false}
        useInert={false}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton _hover={{ fontSize: "2xl" }} color="#fff">
              {<FaIndent />}
            </DrawerCloseButton>
            <DrawerHeader color="#fff">Application Name</DrawerHeader>
            <DrawerBody>
              <SideButtons/>
              <UserMenu/>
            </DrawerBody>
            <DrawerFooter>
              <ColorModeSwitcher justifySelf="flex-end" />
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default SideMenu;
