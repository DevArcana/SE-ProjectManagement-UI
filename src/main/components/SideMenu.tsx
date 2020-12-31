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
import { UserMenu } from "../components/UserMenu";
import { SideButtons } from "../components/SideButtons";
function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        closeOnOverlayClick={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay closeOnOverlayClick="false">
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Application Name</DrawerHeader>
            <DrawerBody>
              <SideButtons></SideButtons>
              <UserMenu></UserMenu>
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
