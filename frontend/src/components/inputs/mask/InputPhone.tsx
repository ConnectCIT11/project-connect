import {
  FormControl,
  FormErrorMessage,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import InputMask from "react-input-mask";

interface InputProps extends ChakraInputProps {
  nameInput: string;
  label: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error = null, nameInput, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <InputGroup color="gray.100" _focusWithin={{ color: "blue.100" }}>
        <InputLeftElement h={"full"} pointerEvents="none">
          <FaPhoneAlt fontSize={20} />
        </InputLeftElement>

        <ChakraInput
          as={InputMask}
          mask="(99)99999-9999"
          maskChar={null}
          name={nameInput}
          id={nameInput}
          placeholder={label}
          focusBorderColor="blue.100"
          borderColor="gray.200"
          bgColor="transparent"
          variant="filled"
          _hover={{
            borderColor: "gray.100",
          }}
          py="6"
          ref={ref}
          {...rest}
        />
      </InputGroup>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const InputPhone = forwardRef(InputBase);
