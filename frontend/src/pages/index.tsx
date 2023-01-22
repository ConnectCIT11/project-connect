import { Divider, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { BackgroundWave } from "../components/BackgroundWave";
import { ButtonGhost } from "../components/buttons/ButtonGhost";
import { ButtonPrimary } from "../components/buttons/ButtonPrimary";
import { InputDefault } from "../components/inputs/InputDefault";
import { InputPassword } from "../components/inputs/mask/InputPassword";

import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";

const Home: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const router = useRouter();
  return (
    <>
      <BackgroundWave title="Connect - Login">
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
          <Text as="i" color="black.100" fontSize={"1rem"}>
            Faça seu Login
          </Text>
          <Image
            w={200}
            objectFit="contain"
            src="/logos/logo-main.png"
            alt="logo"
          />
          <InputDefault icon={AiOutlineUser} label="Email" nameInput="email" />
          <InputPassword
            icon={AiOutlineLock}
            label="Senha"
            nameInput="password"
          />
          <ButtonPrimary onClick={() => router.push("/voucher")}>
            Entrar
          </ButtonPrimary>
          <Divider />
          <Text>Ainda não possui conta?</Text>
          <ButtonGhost onClick={() => router.push("/register")}>
            Faça seu cadastro!
          </ButtonGhost>
        </Stack>
      </BackgroundWave>
    </>
  );
};

export default Home;
