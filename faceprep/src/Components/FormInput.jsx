import {Button,FormControl,FormErrorMessage,FormLabel,Input,InputGroup,InputLeftElement,InputRightElement,Stack} from "@chakra-ui/react";
import {useState} from "react";
import { useFormContext } from "react-hook-form";
import { AiTwotoneEyeInvisible, AiFillEye } from "react-icons/ai";

const FormInput = ({name,label,placeholder,asPassword,leftIcon,icon,...props}) => {
  const {register,formState: { errors },} = useFormContext();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (<><FormControl isInvalid={errors?.[name]}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Stack spacing={4}>
          <InputGroup flexGrow={1}>
            {leftIcon && (
              <InputLeftElement pointerEvents="none" children={leftIcon} />
            )}

            <Input
              name={name}
              id={name}
              type={asPassword && !show ? "password" : "text"}
              placeholder={placeholder}
              {...props}
              {...register(name)}
            />
            {asPassword && (
              <InputRightElement
                width={["0.5rem", "4.5rem"]}
                justifyContent={["right", "center"]}
              >
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                  display={["none", "inline"]}
                >
                  {show ? "Hide" : "Show"}
                </Button>
                <Button
                  h="1rem"
                  size="sm"
                  onClick={handleClick}
                  display={["inline", "none"]}
                  background="transparent"
                >
                  {show ? <AiTwotoneEyeInvisible /> : <AiFillEye />}
                </Button>
              </InputRightElement>
            )}
          </InputGroup>
        </Stack>
        <FormErrorMessage>{errors?.[name]?.message}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default FormInput;
