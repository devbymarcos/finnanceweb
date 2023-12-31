"use server";
import { z } from "zod";
import { postLoginApi } from "@/api/api";
const schema = z.object({
  email: z.string().email("Email Inválido"),
  password: z.string().min(8, "Deve conter no mínimo 8 caracteres"),
});

export async function userLogin(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      data: {
        errors: validatedFields.error.flatten().fieldErrors,
        message: false,
      },
    };
  }

  const { url, options } = postLoginApi(formData);
  const response = await fetch(url, options);
  const json = await response.json();
  console.log(json);

  return {
    data: {
      errors: {
        email: "",
        password: "",
      },
      message: json.message,
    },
  };

  //TODO  continua o script. Realiza requisicao API
  // const rawFormData = {
  //   email: formData.get("email"),
  //   password: formData.get("password"),
  // };

  // console.log(rawFormData);
}
