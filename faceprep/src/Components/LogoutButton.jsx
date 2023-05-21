import { Button, Flex, useToast } from "@chakra-ui/react";
import React, { useContext } from "react";
import { LoginAuthentication } from "../ContextApi/LoginAuthentication";

const LogoutButton = () => {
  const { ToggleLoginauth } = useContext(LoginAuthentication);
const toast = useToast()
  return (
    <Flex align="center" justify="flex-end" marginBlock="20px">
      <Button colorScheme={"red"} onClick={() => {
         toast({
          title: `Logout`,
          status: 'info',
          position: 'top',
          isClosable: true,
          
        })
        ToggleLoginauth()}}>
        Logout
      </Button>
    </Flex>
  );
};

export default LogoutButton;
