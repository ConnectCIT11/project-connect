import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiOutlineCheck, AiOutlineClose, AiOutlineCrown } from "react-icons/ai";
import { IoDiamondOutline } from "react-icons/io5";
import { PlansProps } from "../../interfaces/plansProps";

import { ButtonGhost } from "../buttons/ButtonGhost";
import { ButtonPrimary } from "../buttons/ButtonPrimary";

interface Props {
  item: PlansProps;
}

export const CardPlans = ({ item }: Props) => {
  const router = useRouter();
  return (
    <Card
      minW={300}
      border={"solid 5px"}
      borderColor={item.isMain ? "green.200" : "gray.100"}
    >
      {item.isMain && (
        <Flex w={"full"} justifyContent={"center"} bgColor={"green.200"}>
          <Text
            as={"b"}
            fontSize={"1rem"}
            color={"white.100"}
            textAlign={"center"}
            size="md"
            textTransform={"uppercase"}
          >
            Melhor oferta
          </Text>
        </Flex>
      )}
      <CardHeader as={Stack} alignItems={"center"}>
        <Center
          w={50}
          h={50}
          borderRadius={"full"}
          objectFit={"cover"}
          bgColor="yellow.100"
          color="white"
        >
          {item.isMain ? (
            <IoDiamondOutline size={30} />
          ) : (
            <AiOutlineCrown size={30} />
          )}
        </Center>
        <Box>
          <Text
            fontSize={"1rem"}
            color={"black.100"}
            textAlign={"center"}
            size="md"
            textTransform={"uppercase"}
          >
            {item.title}
          </Text>
          <Text fontWeight={"normal"} fontSize={"1.5rem"} textAlign={"center"}>
            R$ {item.price}
          </Text>
        </Box>
      </CardHeader>
      <CardBody>
        <Stack spacing={4}>
          {item.isMain ? (
            <ButtonPrimary>Adicionar</ButtonPrimary>
          ) : (
            <ButtonGhost>Adicionar</ButtonGhost>
          )}
          <Box>
            {item.plans.map((plan) => (
              <HStack
                key={plan.id_plan}
                alignItems={"center"}
                color={plan.isActive ? "yellow.100" : "red.100"}
              >
                {plan.isActive ? <AiOutlineCheck /> : <AiOutlineClose />}
                <Text
                  key={plan.id_plan}
                  color={plan.isActive ? "black.100" : "gray.300"}
                  pt={2}
                  fontSize="sm"
                >
                  {plan.description}
                </Text>
              </HStack>
            ))}
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Stack w={"full"}>
          <Heading
            as={"i"}
            color={"blue.100"}
            fontSize={"1.5rem"}
            textAlign={"center"}
          >
            Válido por: {item.duration}
          </Heading>
        </Stack>
      </CardFooter>
    </Card>
  );
};
