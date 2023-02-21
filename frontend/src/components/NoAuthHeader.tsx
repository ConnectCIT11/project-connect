import {
  Button,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { ButtonPrimary } from "./buttons/ButtonPrimary";

export const NoAuthHeader = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const router = useRouter();
  return (
    <Flex
      bgColor={"gray.100"}
      p={5}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Image
        onClick={() => router.push("/")}
        cursor="pointer"
        w={isMobile ? 200 : 250}
        objectFit="contain"
        src="/logos/logo-main.png"
        alt="logo"
      />

      {isMobile ? (
        <Menu flip closeOnBlur direction="ltr" placement="bottom-end">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<AiOutlineMenu />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Button
                w={"full"}
                leftIcon={<AiOutlineShoppingCart size={30} />}
                colorScheme="messenger"
                variant="solid"
              >
                Carrinho
              </Button>
            </MenuItem>
            <MenuItem>
              <ButtonPrimary onClick={() => router.push("/")}>
                Conecte-se
              </ButtonPrimary>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Stack align={"center"} direction={"row"} spacing={10}>
          <AiOutlineShoppingCart size={30} />
          <ButtonPrimary onClick={() => router.push("/")}>
            Conecte-se
          </ButtonPrimary>
        </Stack>
      )}
    </Flex>
  );
};
