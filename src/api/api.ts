const URL = process.env.API_HOST;

export const postLoginApi = (dataForm: FormData) => {
  return {
    url: `${URL}/login`,
    options: {
      method: "POST",
      body: dataForm,
    },
  };
};
