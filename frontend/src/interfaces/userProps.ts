export interface SignInProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  cpf: string;
  phone: string;
  dateBirth: string;
}

export interface DataRegisterProps {
  cpf: string;
  dataNascimento: string;
  email: string;
  nome: string;
  senha: string;
  telefone: string;
}
