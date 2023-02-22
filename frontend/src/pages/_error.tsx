import { Box, Flex, Stack, Image, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { ButtonPrimary } from "../components/buttons/ButtonPrimary";

const NotFound: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>CMS - 404</title>
      </Head>

      <Box
        display={"flex"}
        flexDirection={"column"}
        w={"full"}
        h={"100vh"}
        bgColor={"white.100"}
      >
        <Flex
          justifyContent={"center"}
          alignItems="center"
          w={"full"}
          bgColor={"gray.100"}
          h={100}
        >
          <Image
            objectFit={"contain"}
            boxSize="150px"
            src="/logos/logo-main.png"
            alt="logo"
          />
        </Flex>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"full"}
          mt={10}
        >
          <Stack
            bgColor={"gray.100"}
            align={"center"}
            w={"80%"}
            borderRadius={"2xl"}
            padding={10}
          >
            <Heading>Oops, a página não foi encontrada!</Heading>
            <Image
              w={600}
              objectFit="contain"
              src="/images/404.svg"
              alt="not-found"
            />
            <ButtonPrimary w={"xs"} onClick={() => router.back()}>
              Retornar
            </ButtonPrimary>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
