"use server";
import { z } from "zod";
import { postLoginApi } from "@/api/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

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
  if (Array.isArray(json.data) && json.data[0].id) {
    const oneDay = 24 * 60 * 60 * 1000;

    cookies().set({
      name: "token",
      value: json.data[0].token,
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + oneDay),
    });

    redirect("/web");
  }

  return {
    data: {
      errors: {
        email: "",
        password: "",
      },
      message: json.message,
    },
  };
}
