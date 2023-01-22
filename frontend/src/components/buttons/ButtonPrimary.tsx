import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface Props extends ChakraButtonProps {
  children: React.ReactNode;
}

export const ButtonPrimary = ({ children, ...rest }: Props) => {
  return (
    <Button
      bg="blue.100"
      size="md"
      color="white.100"
      w={"full"}
      _hover={{
        bg: "blue.200",
        color: "white.100",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
