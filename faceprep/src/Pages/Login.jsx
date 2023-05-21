import { FormProvider, useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import FormInput from "../Components/FormInput";
import { Flex, Icon, Stack,Button } from "@chakra-ui/react";
import { useContext } from "react";
import { LoginAuthentication } from "../ContextApi/LoginAuthentication";
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

const Loginpage = () => {
  const { ToggleLoginauth } = useContext(LoginAuthentication);
  const { handleSubmit, reset, ...formData } = useForm({
    defaultValues: { username: "", password: "" },
  });
  const navigate = useNavigate();
const toast = useToast();
  const loginTrigger = (data) => {
    if (data.username === "foo" && data.password === "bar") {
      ToggleLoginauth();
      toast({
        title: `Login successfull`,
        status: 'success',
        position: 'top',
        isClosable: true,
        
      })
      navigate("/home");
    } else {
      toast({
        title: `Wrong id or Password`,
        status: 'error',
        position: 'top',
        isClosable: true,
        
      })
      reset();
    }
  };

  return (
    <FormProvider {...formData}>
      <form onSubmit={handleSubmit(loginTrigger)}>
        <Flex
          alignItems="center"
          h={"100svh" || "100vh"}
          justifyContent="center"
        >
          <Stack
            spacing={4}
            w="90%"
            maxW="25rem"
            boxShadow="dark-lg"
            p={["1rem 1rem", "3rem 2rem", "3rem 2rem", "3rem 2rem"]}
          >
            <FormInput
              name="username"
              placeholder="Enter Your Username"
              leftIcon={<Icon as={FaUserCircle} />}
              label="Username"
            />
            <FormInput
              name="password"
              placeholder="Enter Your Password"
              leftIcon={<Icon as={RiLockPasswordFill} />}
              label="Password"
              asPassword
            />
           <Flex align="center" m justifyContent="center">
      <Button

        colorScheme={"whatsapp"}
        width="100%"
        maxW="13.5rem"
        type="submit"
      >
        Login
      </Button>
    </Flex>
          </Stack>
        </Flex>
      </form>
    </FormProvider>
  );
};
export default Loginpage;
