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
import { noAuth } from "../../HOC/auth";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { RegisterProps } from "../../interfaces/userProps";
import {
  fnFormattedDate,
  fnRemoveCaracteresSpecials,
} from "../../../utils/utilsFormattedFields";

const registerFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Email inválido, verifique e tente novamente."),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "A senha deve ter no minímo 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirmar senha obrigatória")
    //@ts-ignore
    .oneOf([yup.ref("password"), null], "As senhas não são iguais")
    .min(6, "A senha deve ter no minímo 6 caracteres"),
  name: yup.string().required("Nome completo obrigatório"),
  cpf: yup.string().required("CPF obrigatório"),
  phone: yup
    .string()
    .required("Telefone obrigatório")
    .min(14, "Telefone inválido"),
  dateBirth: yup.string().required("Data de nascimento obrigatório"),
});

const Register: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const router = useRouter();
  const { registerUser } = useContext(AuthContext);

  const { register, handleSubmit, formState } = useForm<RegisterProps>({
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<RegisterProps> = async (values) => {
    const { email, password, name, cpf, phone, dateBirth } = values;

    const data = {
      email,
      senha: password,
      nome: name.toUpperCase(),
      cpf: fnRemoveCaracteresSpecials(cpf),
      telefone: fnRemoveCaracteresSpecials(phone),
      dataNascimento: fnFormattedDate(dateBirth),
    };

    registerUser(data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <BackgroundWave title="Connect - Registro">
      <Stack
        onSubmit={handleSubmit(onSubmit)}
        as={"form"}
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

        <InputDefault
          icon={AiOutlineUser}
          label="Email"
          nameInput="email"
          error={formState.errors.email}
          {...register("email")}
        />
        <Stack w={"full"} direction={isMobile ? "column" : "row"}>
          <InputPassword
            icon={AiOutlineLock}
            label="Senha"
            nameInput="password"
            error={formState.errors.password}
            {...register("password")}
          />
          <InputPassword
            icon={AiOutlineLock}
            label="Confirmar senha"
            nameInput="confirmPassword"
            error={formState.errors.confirmPassword}
            {...register("confirmPassword")}
          />
        </Stack>

        <Divider />
        <InputDefault
          icon={HiOutlineUserCircle}
          label="Nome completo"
          nameInput="name"
          error={formState.errors.name}
          {...register("name")}
        />
        <Stack w={"full"} direction={isMobile ? "column" : "row"}>
          <InputCpf
            label="Cpf"
            nameInput="cpf"
            error={formState.errors.cpf}
            {...register("cpf")}
          />
          <InputPhone
            label="Telefone"
            nameInput="phone"
            error={formState.errors.phone}
            {...register("phone")}
          />
          <InputDate
            label="Data de Nascimento"
            nameInput="dateBirth"
            error={formState.errors.dateBirth}
            {...register("dateBirth")}
          />
        </Stack>

        <Stack w={"full"} direction={isMobile ? "column-reverse" : "row"}>
          <ButtonGhost onClick={() => router.back()}>Cancelar</ButtonGhost>
          <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
        </Stack>
      </Stack>
    </BackgroundWave>
  );
};

export default Register;

export const getServerSideProps = noAuth((context: any) => {
  return {
    props: {},
  };
});
