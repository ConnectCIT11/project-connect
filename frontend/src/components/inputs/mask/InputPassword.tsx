import {
  FormControl,
  FormErrorMessage,
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import { FieldError } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface InputProps extends ChakraInputProps {
  nameInput: string;
  label: string;
  icon?: React.ComponentType;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { icon, label, error = null, nameInput, ...rest },
  ref
) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={!!error}>
      <InputGroup
        size="md"
        color="gray.100"
        _focusWithin={{ color: "blue.100" }}
      >
        {icon && (
          <InputLeftElement h={"full"} pointerEvents="none">
            <Icon as={icon} fontSize={20} />
          </InputLeftElement>
        )}
        <ChakraInput
          name={nameInput}
          id={nameInput}
          placeholder={label}
          focusBorderColor="blue.100"
          borderColor="gray.200"
          bgColor="transparent"
          variant="filled"
          py={6}
          _hover={{
            borderColor: "gray.100",
          }}
          type={show ? "text" : "password"}
          ref={ref}
          {...rest}
        />
        {(nameInput === "password" ||
          nameInput === "confirmPassword" ||
          nameInput === "newPassword") && (
          <InputRightElement mt="1.5">
            <Icon
              onClick={handleClick}
              as={!show ? AiFillEye : AiFillEyeInvisible}
              fontSize="20"
            />
          </InputRightElement>
        )}
      </InputGroup>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const InputPassword = forwardRef(InputBase);
