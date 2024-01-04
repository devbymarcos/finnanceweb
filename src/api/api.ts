const URL = process.env.API_HOST;

//LOGIN INIT
interface ApiRequestOptions {
  method: string;
  body: FormData | string;
  cache?: RequestCache | undefined;
}

interface ApiRequest {
  url: string;
  options: ApiRequestOptions;
}

export const postLoginApi = (dataForm: FormData): ApiRequest => {
  return {
    url: `${URL}/login`,
    options: {
      method: "POST",
      body: dataForm,
      cache: "no-store",
    },
  };
};
