const URL = process.env.API_HOST;

//LOGIN INIT
interface ApiRequestOptions {
  method: string;
  body?: string;
  cache?: RequestCache | undefined;
  headers?: {
    "Content-Type": string;
    Authorization?: string;
  };
}

interface ApiRequest {
  url: string;
  options: ApiRequestOptions;
}

export const postLoginApi = (dataForm: string): ApiRequest => {
  return {
    url: `${URL}/login`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
export const getCategoryIdApi = (
  token: string | undefined,
  categoryId?: string
): ApiRequest => {
  return {
    url: `${URL}/category/${categoryId}`,
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

export const getWalletApi = (token: string | undefined): ApiRequest => {
  return {
    url: `${URL}/wallets`,
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

export const getWalletIdApi = (
  token: string | undefined,
  walletId: string | undefined
): ApiRequest => {
  return {
    url: `${URL}/wallet/${walletId}`,
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

export const getInvoiceIdApi = (
  token: string | undefined,
  invoiceId?: string
): ApiRequest => {
  return {
    url: `${URL}/invoice/${invoiceId}`,
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

export const postInvoiceApi = (
  token: string | undefined,
  dataForm: string
): ApiRequest => {
  return {
    url: `${URL}/invoice`,
    options: {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: dataForm,
    },
  };
};

export const putInvoiceApi = (
  token: string | undefined,
  dataForm: string
): ApiRequest => {
  return {
    url: `${URL}/invoice`,
    options: {
      method: "PUT",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: dataForm,
    },
  };
};
