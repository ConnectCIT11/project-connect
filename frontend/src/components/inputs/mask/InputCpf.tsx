import {
  FormControl,
  FormErrorMessage,
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import InputMask from "react-input-mask";
import { RiAsterisk } from "react-icons/ri";

interface InputProps extends ChakraInputProps {
  nameInput: string;
  label: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, nameInput, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <InputGroup color="gray.100" _focusWithin={{ color: "blue.100" }}>
        <InputLeftElement h={"full"} pointerEvents="none">
          <Icon as={RiAsterisk} fontSize={20} />
        </InputLeftElement>

        <ChakraInput
          as={InputMask}
          mask="999.999.999-99"
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
          py={6}
          ref={ref}
          {...rest}
        />
      </InputGroup>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const InputCpf = forwardRef(InputBase);
