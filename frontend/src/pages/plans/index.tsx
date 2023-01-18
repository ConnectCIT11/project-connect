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
import { CardPlans } from "../../components/cards/CardPlans";
import { LayoutNoAuth } from "../../layouts/LayoutNoAuth";

const mockPlans = [
  {
    id: 1,
    title: "Básico",
    price: 100,
    duration: "10 dias",
    plans: [
      {
        id_plan: 1,
        description: "10gb de internet",
      },
      {
        id_plan: 2,
        description: "10gb de internet",
      },
    ],
  },
  {
    id: 3,
    title: "Pró",
    price: 300,
    duration: "10 dias",
    plans: [
      {
        id_plan: 1,
        description: "10gb de internet",
      },
    ],
  },
  {
    id: 2,
    title: "Médio",
    price: 200,
    duration: "10 dias",
    plans: [
      {
        id_plan: 1,
        description: "10gb de internet",
      },
    ],
  },
];

const Plans: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <LayoutNoAuth>
      <Head>
        <title>Connect - Planos</title>
      </Head>

      <Box as="main">
        <Container p={10} maxW={"container.md"}>
          <Stack spacing={10} align={"center"} w={"full"}>
            <Heading fontSize={"3rem"} color={"blue.100"}>
              Preços
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
              <CardPlans dataList={mockPlans} />
            </Flex>
          </Stack>
        </Container>
      </Box>
    </LayoutNoAuth>
  );
};

export default Plans;
