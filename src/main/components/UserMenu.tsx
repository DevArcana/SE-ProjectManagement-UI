import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import React from "react";
import { FaUser, FaChevronDown } from "react-icons/fa";
import { username } from "../views/MainView";
export const UserMenu: React.FC = () => {
  return (
    <Menu placement="bottom-end" autoSelect={false}>
      <MenuButton
        as={Button}
        w="100%"
        justifyContent="left"
        leftIcon={<FaUser />}
        rightIcon={<FaChevronDown />}
        color="#fff"
        colorScheme="transparent"
      >
        {username}
      </MenuButton>
      <MenuList background="transparent" border="none" shadow="none">
        <Menu autoSelect={false} placement="bottom-end">
          <MenuButton
            as={Button}
            w="100%"
            justifyContent="left"
            rightIcon={<FaChevronDown />}
            colorScheme="transparent"
            color="#fff"
          >
            Settings
          </MenuButton>
          <MenuList background="transparent" border="none" shadow="none">
            <MenuItem>Change username</MenuItem>
            <MenuItem>Change password</MenuItem>
            <MenuItem>Two-factor authentication</MenuItem>
          </MenuList>
        </Menu>
      </MenuList>
    </Menu>
  );
};
