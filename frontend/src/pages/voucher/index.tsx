import {
  Box,
  Divider,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { HiOutlineTicket } from "react-icons/hi";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { Footer } from "../../components/Footer";
import { InputDefault } from "../../components/inputs/InputDefault";

const Voucher: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Connect - Voucher</title>
      </Head>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"full"}
        minH={"80vh"}
        bgImage="/backgrounds/bg-green.svg"
        bgRepeat={"no-repeat"}
        bgSize={"contain"}
        bgPosition={"top"}
      >
        <Stack
          my={20}
          w={isMobile ? "250px" : "md"}
          align="center"
          border={"solid 1px"}
          borderRadius="10px"
          borderColor={"gray.100"}
          p={5}
          spacing={5}
          bgColor="white.100"
        >
          <Image
            w={200}
            objectFit="contain"
            src="/logos/logo-name.png"
            alt="logo"
          />
          <InputDefault
            icon={HiOutlineTicket}
            label="Código Voucher"
            nameInput="email"
          />

          <ButtonPrimary bgColor={"green.200"} _hover={{ bg: "green.100" }}>
            Acessar
          </ButtonPrimary>
          <Divider />
          <Text>Adquira seu ticket, via PIX, veja nossos planos!</Text>
          <ButtonPrimary onClick={() => router.push("/plans")}>
            Planos
          </ButtonPrimary>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default Voucher;
