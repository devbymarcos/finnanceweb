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

export const getUserApi = (token: string | undefined): ApiRequest => {
  return {
    url: `${URL}/user`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
export const putUserApi = (
  token: string | undefined,
  formData: string
): ApiRequest => {
  return {
    url: `${URL}/user`,
    options: {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  };
};

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

export const getDashApi = (
  token: string | undefined,
  wallet_id: string
): ApiRequest => {
  return {
    url: `${URL}/dash?wallet_id=${wallet_id}`,
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

export const postCategoryApi = (
  token: string | undefined,
  dataForm: string
): ApiRequest => {
  return {
    url: `${URL}/category`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: dataForm,
    },
  };
};

export const putCategoryApi = (
  token: string | undefined,
  dataform: string
): ApiRequest => {
  return {
    url: `${URL}/category`,
    options: {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: dataform,
    },
  };
};

export const deleteCategoryApi = (
  token: string | undefined,
  id: string
): ApiRequest => {
  return {
    url: `${URL}/category/${id}`,
    options: {
      method: "DELETE",
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
    url: `${URL}/wallet`,
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

export const postWalletApi = (
  token: string | undefined,
  dateForm: string
): ApiRequest => {
  return {
    url: `${URL}/wallet`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
      body: dateForm,
    },
  };
};

export const putWalletApi = (
  token: string | undefined,
  dataform: string
): ApiRequest => {
  return {
    url: `${URL}/wallet`,
    options: {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
      body: dataform,
    },
  };
};

export const deleteWalletApi = (
  token: string | undefined,
  walletId: string
): ApiRequest => {
  return {
    url: `${URL}/wallet/${walletId}`,
    options: {
      method: "DELETE",
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
      walletId?: string;
    }
  | undefined;

export const getInvoiceApi = (
  token: string | undefined,
  data: params
): ApiRequest => {
  return {
    url: `${URL}/invoice?date_one=${data?.dateone}&date_two=${data?.datetwo}&walletId=${data?.walletId}`,
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

export const postTransferInvoiceApi = (
  token: string | undefined,
  dataForm: string
): ApiRequest => {
  return {
    url: `${URL}/transfer`,
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
export const deleteInvoiceApi = (
  token: string | undefined,
  id: string
): ApiRequest => {
  return {
    url: `${URL}/invoice/${id}`,
    options: {
      method: "DELETE",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
