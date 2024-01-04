import { cookies } from "next/headers";
const URL = process.env.API_HOST;
const token: string | undefined = cookies().get("token")?.value;

//LOGIN INIT
interface ApiRequestOptions {
  method: string;
  body?: FormData | string;
  cache?: RequestCache | undefined;
  headers?: {
    "Content-Type": string;
    Authorization: string;
  };
}

interface ApiRequest {
  url: string;
  options: ApiRequestOptions;
}

export const postLoginApi = (dataForm: FormData): ApiRequest => {
  return {
    url: `${URL}/login`,
    options: {
      method: "POSt",
      body: dataForm,
      cache: "no-store",
    },
  };
};

export const getDashApi = (wallet_id: number): ApiRequest => {
  return {
    url: `${URL}/dash?wallet_id=${wallet_id}`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  };
};
