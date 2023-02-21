import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useCookies } from "react-cookie";
import { RegisterProps, SignInProps } from "../interfaces/userProps";

interface AuthContextType {
  signIn: (data: SignInProps) => Promise<any>;
  registerUser: (data: RegisterProps) => Promise<any>;
  signOut: () => void;
}

interface Props {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: Props) {
  const router = useRouter();

  const [cookies, setCookie, removeCookie] = useCookies(["@connect.token"]);
  const token = cookies["@connect.token"];

  const signOut = () => {
    removeCookie("@connect.token", { path: "/" });
    router.push("/");
  };

  const signIn = async ({ email, password }: SignInProps): Promise<any> => {
    console.log(email, password);
  };

  const registerUser = async (values: RegisterProps): Promise<any> => {
    console.log(values);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        registerUser,
      }}
    >
      <>{children}</>
    </AuthContext.Provider>
  );
}
