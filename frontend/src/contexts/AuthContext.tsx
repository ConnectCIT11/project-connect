import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect } from "react";
import { useCookies } from "react-cookie";
import { DataRegisterProps, SignInProps } from "../interfaces/userProps";
import { api } from "../services/api";

interface AuthContextType {
  signIn: (data: SignInProps) => Promise<any>;
  registerUser: (data: DataRegisterProps) => Promise<any>;
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
    try {
      const response = await api.post("/login", {
        email: values.email,
        password: values.password,
      });

      return response;
    } catch (error) {
      console.error("Error on signIn", error);
    }
  };

  const registerUser = async (data: DataRegisterProps): Promise<any> => {
    try {
      const response = await api.post("/addcliente", data);

      return response;
    } catch (error) {
      console.error("Error on registerUser", error);
    }
  };

  /* useEffect(() => {
    if (token) {
      api
        .get("/info", configHeaders(token))
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error("Erro ao buscar usuário: ", err));
    }
  }, [token]); */

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
