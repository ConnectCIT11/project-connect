import {
  Box,
  Container,
  Heading,
  Stack,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { CardPlans } from "../../components/cards/CardPlans";
import { LayoutNoAuth } from "../../layouts/LayoutNoAuth";
import { api } from "../../services/api";

const mockPlans = [
  {
    id: 1,
    title: "Basic",
    price: 100,
    duration: "1 semana",
    isMain: false,
    plans: [
      {
        id_plan: 1,
        description: "Sem anúncios",
        isActive: true,
      },
      {
        id_plan: 2,
        description: "1gb de internet",
        isActive: true,
      },
      {
        id_plan: 3,
        description: "Acesso ilimitado na plataforma",
        isActive: false,
      },
      {
        id_plan: 4,
        description: "Compartilhe em até 2 dispositivo",
        isActive: false,
      },
    ],
  },
  {
    id: 3,
    title: "Diamante",
    price: 500,
    duration: "1 mês",
    isMain: true,
    plans: [
      {
        id_plan: 1,
        description: "Sem anúncios",
        isActive: true,
      },
      {
        id_plan: 2,
        description: "10gb de internet",
        isActive: true,
      },
      {
        id_plan: 3,
        description: "Acesso ilimitado na plataforma",
        isActive: true,
      },
      {
        id_plan: 4,
        description: "Compartilhe em até 2 dispositivos",
        isActive: true,
      },
    ],
  },
  {
    id: 2,
    title: "Premium",
    price: 200,
    duration: "2 semanas",
    isMain: false,
    plans: [
      {
        id_plan: 1,
        description: "Sem anúncios",
        isActive: true,
      },
      {
        id_plan: 2,
        description: "4gb de internet",
        isActive: true,
      },
      {
        id_plan: 3,
        description: "Acesso ilimitado na plataforma",
        isActive: true,
      },
      {
        id_plan: 4,
        description: "Compartilhe em até 2 dispositivos",
        isActive: false,
      },
    ],
  },
];

const Plans: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");

  useEffect(() => {
    api
      .get("/products")
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  }, []);

  return (
    <LayoutNoAuth>
      <Head>
        <title>Connect - Planos</title>
      </Head>

      <Box as="main" height={"100vh"}>
        <Container p={10} maxW={"container.md"}>
          <Stack spacing={10} align={"center"} w={"full"}>
            <Heading fontSize={"3rem"} color={"blue.100"}>
              Planos
            </Heading>
            <Text as="i" fontSize={"1rem"} align={"center"}>
              Dependendo da atividade que você exerce diariamente, como jogar
              games online ou trabalhar de casa, por exemplo, é necessário que o
              plano de internet banda larga ofereça uma quantidade de mega
              específicos. Analise os preços, benefícios e cobertura da sua
              região para escolher o plano que mais faz sentido para você.
            </Text>

            <Flex
              flexDirection={isMobile ? "column" : "row"}
              gap={10}
              justifyContent={"space-evenly"}
              alignItems="flex-end"
            >
              {mockPlans.map((item) => (
                <Box key={item.id}>
                  <CardPlans item={item} />
                </Box>
              ))}
            </Flex>
          </Stack>
        </Container>
      </Box>
    </LayoutNoAuth>
  );
};

export default Plans;
