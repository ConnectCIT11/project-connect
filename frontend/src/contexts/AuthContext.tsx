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
import { api, configHeaders } from "../services/api";

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

  const signIn = async (values: SignInProps): Promise<any> => {
    const response = api.post("/login", {
      email: values.email,
      password: values.password,
    });

    return response;
  };

  const registerUser = async (values: RegisterProps): Promise<any> => {
    const response = api.post("/addcliente", {
      email: values.email,
      password: values.password,
      name: values.name,
      cpf: values.cpf,
      phone: values.phone,
      dateBirth: values.dateBirth,
    });

    return response;
  };

  useEffect(() => {
    if (token) {
      api.get("/info", configHeaders(token));
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
