"use server";
import { z } from "zod";
import { postCategoryApi } from "@/http/api";
import { cookies } from "next/headers";
import { jsonFormatterFormData } from "@/functions/helpers";
import { revalidatePath } from "next/cache";

const schema = z.object({
  name: z.string().min(3, "Insira um nome para carteira"),
  description: z
    .string()
    .min(3, "Escreva uma descrição com no minimo 8 caracteres"),
  type: z.string().min(6, "Escolha o tipo "),
});

export async function saveCategory(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    type: formData.get("type"),
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
  const { url, options } = postCategoryApi(
    token,
    jsonFormatterFormData(formData)
  );

  const response = await fetch(url, options);
  const json = await response.json();

  revalidatePath("/categorias/list");

  if (json.data && json.data[0].id) {
    return {
      data: {
        errors: {
          name: "",
          description: "",
          type: "",
        },
        message: "Registro Criado com sucesso",
        status: true,
        type: "succes",
      },
    };
  }

  return {
    data: {
      errors: {
        name: "",
        description: "",
      },
      message: "Nào foi possivel salvar contate o admin",
      status: false,
      type: "error",
    },
  };
}
