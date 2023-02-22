import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactNode } from "react";
import { Footer } from "./Footer";

interface Props {
  title: string;
  children: ReactNode;
}

export const BackgroundWave = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"full"}
        minH={"100vh"}
        bgImage="/waves/wave-main.svg"
        bgPosition={"top"}
        bgRepeat={"no-repeat"}
        bgSize={"contain"}
      >
        {children}
      </Box>
    </>
  );
};
