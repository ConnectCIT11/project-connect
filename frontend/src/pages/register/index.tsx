import { Divider, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BackgroundWave } from "../../components/BackgroundWave";
import { ButtonGhost } from "../../components/buttons/ButtonGhost";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { InputDate } from "../../components/inputs/InputDate";
import { InputDefault } from "../../components/inputs/InputDefault";
import { InputCpf } from "../../components/inputs/mask/InputCpf";
import { InputPassword } from "../../components/inputs/mask/InputPassword";
import { InputPhone } from "../../components/inputs/mask/InputPhone";

const Register: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const router = useRouter();
  return (
    <>
      <BackgroundWave title="Connect - Registro">
        <Stack
          my={20}
          w={isMobile ? "250px" : "container.md"}
          align="center"
          border={"solid 1px"}
          borderRadius="10px"
          borderColor={"gray.100"}
          p={5}
          spacing={5}
          bgColor="white.100"
        >
          <Text as="i" color="black.100" fontSize={"1rem"}>
            Preencha todos os campos para realizar seu cadastro!
          </Text>

          <InputDefault icon={AiOutlineUser} label="Email" nameInput="email" />
          <Stack w={"full"} direction={isMobile ? "column" : "row"}>
            <InputPassword
              icon={AiOutlineLock}
              label="Senha"
              nameInput="password"
            />
            <InputPassword
              icon={AiOutlineLock}
              label="Confirmar senha"
              nameInput="password"
            />
          </Stack>

          <Divider />
          <InputDefault
            icon={HiOutlineUserCircle}
            label="Nome"
            nameInput="name"
          />
          <Stack w={"full"} direction={isMobile ? "column" : "row"}>
            <InputCpf label="Cpf" nameInput="cpf" />
            <InputPhone label="Telefone" nameInput="phone" />
            <InputDate label="Data de Nascimento" nameInput="birthDate" />
          </Stack>

          <Stack w={"full"} direction={isMobile ? "column-reverse" : "row"}>
            <ButtonGhost onClick={() => router.back()}>Cancelar</ButtonGhost>
            <ButtonPrimary>Cadastrar</ButtonPrimary>
          </Stack>
        </Stack>
      </BackgroundWave>
    </>
  );
};

export default Register;
