import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
  children: React.ReactNode;
}

export const ButtonGhost = ({ children, ...rest }: Props) => {
  return (
    <Button
      w={"full"}
      variant={"ghost"}
      size="md"
      border="solid 1px"
      borderColor={"blue.100"}
      color="blue.100"
      _hover={{
        bg: "gray.100",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
