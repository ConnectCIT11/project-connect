import {
  Divider,
  Flex,
  Stack,
  Text,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

export const Footer = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");

  const date = new Date();
  const year = date.getFullYear();

  return (
    <Stack bgColor={"gray.200"} p={10}>
      <Divider />
      <Flex
        flexDirection={isMobile ? "column-reverse" : "row"}
        p={10}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text>© {year} Connect, Todos os direitos reservados</Text>

        <Image
          w={250}
          objectFit="contain"
          src="/logos/logo-main.png"
          alt="logo"
        />

        <Stack direction={"row"}>
          <AiFillFacebook size={25} />
          <AiFillTwitterCircle size={25} />
          <AiFillInstagram size={25} />
        </Stack>
      </Flex>
    </Stack>
  );
};
