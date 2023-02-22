import { format, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";

export const fnFormattedDate = (date: string) => {
  const newDate = addDays(new Date(date), 1);
  const formattedDate = format(newDate, "dd/MM/yyyy", { locale: ptBR });

  return formattedDate;
};

export const fnRemoveCaracteresSpecials = (value: string) => {
  const removeSpecials = value.replace(/\D+/g, "");

  return removeSpecials;
};
