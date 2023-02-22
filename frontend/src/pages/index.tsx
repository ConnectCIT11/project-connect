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
import { BackgroundWave } from "../components/BackgroundWave";
import { ButtonPrimary } from "../components/buttons/ButtonPrimary";
import { InputDefault } from "../components/inputs/InputDefault";

const Home: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const router = useRouter();
  return (
    <>
      <BackgroundWave title="Connect - Voucher">
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
            src="/logos/logo-main.png"
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
      </BackgroundWave>
    </>
  );
};

export default Home;
