import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUsers } from "../hooks/useUsers";
import { postCollaborator } from "../api/issuesAPI";
import { useParams } from "react-router-dom";
import {
  useDisclosure,
  VStack,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  Input,
  ModalFooter,
  Select
} from "@chakra-ui/react";

interface FormData {
  username: string;
}

export const MembersManagement: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { users, isFetching, fetchUsers } = useUsers();
  const { projectId } = useParams();
  const onSubmit = async (data: FormData) => {
    const user = data.username;
    console.log(user);
    console.log(typeof user);
    console.log(typeof projectId);
    await postCollaborator(projectId, user);
  }

  useEffect(() => {
    fetchUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <VStack>
      <Box
        as={Button}
        width="fit-content"
        height="fit-content"
        padding="5px"
        borderRadius="lg"
        textAlign="center"
        fontSize="18px"
        colorScheme="primary"
        color="#fff"
        boxShadow="lg"
        onClick={onOpen}
      >
        Manage members
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent color="#fff">
          <ModalHeader>Manage members</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <VStack>
                <Select 
                  name="username"
                  placeholder="Select user to invite"
                  ref={register({ required: true })}>
                  {users.map(user => (
                    <option value={user.userName}>{user.userName}</option>
                  ))}
                </Select>
                {errors.username && <span>Username is required!</span>}
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="primary"
                mr={3}
                color="#fff"
                type={"submit"}
                onClick={onClose}
              >
                Invite
              </Button>
              <Button colorScheme="secondary" onClick={onClose} color="#fff">
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </VStack>
  );
};
