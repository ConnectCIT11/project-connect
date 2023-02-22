import {
  Box,
  Container,
  Heading,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { withAuth } from "../../HOC/auth";
import { LayoutNoAuth } from "../../layouts/LayoutNoAuth";

const PlansCreate: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <LayoutNoAuth>
      <Head>
        <title>Connect - Criar plano</title>
      </Head>

      <Box as="main">
        <Container p={10} maxW={"container.md"}>
          <Stack spacing={10} align={"center"} w={"full"}>
            <Heading fontSize={"3rem"} color={"blue.100"}>
              Criar novo plano
            </Heading>
          </Stack>
        </Container>
      </Box>
    </LayoutNoAuth>
  );
};

export default PlansCreate;

export const getServerSideProps = withAuth(async (context: any) => {
  const token = context.req.cookies["@connect.token"];

  return {
    props: {
      token,
    },
  };
});
