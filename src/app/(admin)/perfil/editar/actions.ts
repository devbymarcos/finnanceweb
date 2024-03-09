"use server";
import { z } from "zod";
import { putUserApi } from "@/http/api";
import { cookies } from "next/headers";
import { jsonFormatterFormData } from "@/functions/helpers";
import { revalidatePath } from "next/cache";

const schema = z.object({
  first_name: z.string().min(3, "Este campo não pode fica vazio"),
  last_name: z.string().min(3, "Este campo não pode fica vazio"),
  email: z.string().email("Digite um email válido"),
});

export async function updateUser(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      data: {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "",
        status: false,
        type: "error",
      },
    };
  }

  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = putUserApi(token, jsonFormatterFormData(formData));

  const response = await fetch(url, options);
  const json = await response.json();

  revalidatePath("/perfil/editar");

  if (json.data && json.data[0].id) {
    return {
      data: {
        errors: {
          first_name: "",
          last_name: "",
          email: "",
        },
        message: "Registro Atualizado com sucesso",
        status: true,
        type: "succes",
      },
    };
  }

  return {
    data: {
      errors: {
        first_name: "",
        last_name: "",
        email: "",
      },
      message: "Nào foi possivel atualizar contate o admin",
      status: false,
      type: "error",
    },
  };
}
