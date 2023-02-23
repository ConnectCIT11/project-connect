import axios from "axios";

export const configHeaders = (token: string, contentType?: string) => {
  const config = {
    headers: {
      "Content-Type": contentType ? `${contentType}` : "application/json",
      Authorization: `${token}`,
    },
  };
  return config;
};

export const config = {
  optionsHeader: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
  base_url: process.env.NEXT_PUBLIC_HOST_API,
};

export const api = axios.create({
  baseURL: config.base_url,
  timeout: 25000,
  headers: config.optionsHeader,
});
