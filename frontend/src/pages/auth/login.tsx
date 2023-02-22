import { Divider, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { BackgroundWave } from "../../components/BackgroundWave";
import { ButtonGhost } from "../../components/buttons/ButtonGhost";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { InputDefault } from "../../components/inputs/InputDefault";
import { InputPassword } from "../../components/inputs/mask/InputPassword";
import { noAuth } from "../../HOC/auth";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { SignInProps } from "../../interfaces/userProps";

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Email inválido, verifique e tente novamente."),
  password: yup.string().required("Senha obrigatória"),
});

const Login: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  const { register, handleSubmit, formState } = useForm<SignInProps>({
    resolver: yupResolver(signInFormSchema),
  });

  const onSubmit: SubmitHandler<SignInProps> = async (values) => {
    const response = await signIn(values);
    console.log(
      "🚀 ~ file: login.tsx:38 ~ constonSubmit:SubmitHandler<SignInProps>= ~ response:",
      response
    );
  };

  return (
    <BackgroundWave title="Connect - Login">
      <Stack
        onSubmit={handleSubmit(onSubmit)}
        as={"form"}
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
        <InputDefault
          icon={AiOutlineUser}
          label="Email"
          nameInput="email"
          error={formState.errors.email}
          {...register("email")}
        />
        <InputPassword
          icon={AiOutlineLock}
          label="Senha"
          nameInput="password"
          error={formState.errors.password}
          {...register("password")}
        />
        <ButtonPrimary type="submit" /* onClick={() => router.push("/")} */>
          Entrar
        </ButtonPrimary>
        <Divider />
        <Text>Ainda não possui conta?</Text>
        <ButtonGhost onClick={() => router.push("/auth/register")}>
          Faça seu cadastro!
        </ButtonGhost>
      </Stack>
    </BackgroundWave>
  );
};

export default Login;

export const getServerSideProps = noAuth((context: any) => {
  return {
    props: {},
  };
});
