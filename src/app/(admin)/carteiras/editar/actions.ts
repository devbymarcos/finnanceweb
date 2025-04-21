"use server";
import { z } from "zod";
import { deleteWalletApi, putWalletApi } from "@/http/api";
import { cookies } from "next/headers";
import { jsonFormatterFormData } from "@/functions/helpers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const schema = z.object({
  name: z.string().min(3, "Insira um nome para carteira"),
  description: z
    .string()
    .min(3, "Escreva uma descrição com no minimo 8 caracteres"),
});

export async function updateWallet(prevState: any, formData: FormData) {
  if (formData.get("delete") === "true") {
    const id = String(formData.get("id"));
    const token: string | undefined = cookies().get("token")?.value;
    const { url, options } = deleteWalletApi(token, id);

    const response = await fetch(url, options);
    const json = await response.json();

    revalidatePath("/carteiras/list");
    redirect("/carteiras/list");
  }

  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
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
  const { url, options } = putWalletApi(token, jsonFormatterFormData(formData));

  const response = await fetch(url, options);
  const json = await response.json();

  revalidatePath("/carteiras/list");

  if (json.data && json.data[0].id) {
    return {
      data: {
        errors: {
          name: "",
          description: "",
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
        name: "",
        description: "",
      },
      message: "Nào foi possivel atualizar contate o admin",
      status: false,
      type: "error",
    },
  };
}
