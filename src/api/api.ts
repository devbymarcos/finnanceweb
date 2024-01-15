const URL = process.env.API_HOST;

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
      cache: "no-cache",
    },
  };
};

export const getDashApi = (token: string | undefined): ApiRequest => {
  return {
    url: `${URL}/dash`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    },
  };
};
export const getCategoryApi = (token: string | undefined): ApiRequest => {
  return {
    url: `${URL}/categories`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const getWalletApi = (token: string | undefined): ApiRequest => {
  return {
    url: `${URL}/wallets`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
type params =
  | {
      dateone?: string;
      datetwo?: string;
    }
  | undefined;
export const getInvoiceApi = (
  token: string | undefined,
  date: params
): ApiRequest => {
  return {
    url: `${URL}/invoice?date_one=${date?.dateone}&date_two=${date?.datetwo}`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    },
  };
};
