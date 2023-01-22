import React, { ReactNode } from "react";
import { NoAuthHeader } from "../components/NoAuthHeader";
import { Footer } from "../components/Footer";

interface Props {
  children: ReactNode;
}

export const LayoutNoAuth = ({ children }: Props) => {
  return (
    <>
      <NoAuthHeader />
      {children}
      <Footer />
    </>
  );
};
