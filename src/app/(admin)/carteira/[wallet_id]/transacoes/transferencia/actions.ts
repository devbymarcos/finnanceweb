"use server";
import { z } from "zod";
import { postTransferInvoiceApi } from "@/http/api";
import { cookies } from "next/headers";
import { jsonFormatterFormData } from "@/functions/helpers";
import { currency } from "remask";
import { revalidatePath } from "next/cache";

const schema = z.object({
  description: z.string().min(8, "A descriçao deve ter no mínimo 8 caracteres"),
  price: z.string().min(1, "Prencha um valor"),
  due_at: z.string().min(10, "Preencha a Data"),
  walletIdIn: z.string().min(1, "Selecione a cateira"),
  walletIdOut: z.string().min(1, "Selecione a cateira"),
  categoryIdOut: z.string().min(1, "Selecione a categoria"),
  categoryIdIn: z.string().min(1, "Selecione a categoria"),
});

export async function postTranfer(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    description: formData.get("description"),
    price: formData.get("price"),
    due_at: formData.get("due_at"),
    walletIdIn: formData.get("walletIdIn"),
    walletIdOut: formData.get("walletIdOut"),
    categoryIdOut: formData.get("categoryIdOut"),
    categoryIdIn: formData.get("categoryIdIn"),
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
  //Remoção da mask para Database
  const priceDb = currency.unmask({
    locale: "pt-BR",
    currency: "BRL",
    value: String(formData.get("price")),
  });
  //adicionado valor de volta ao objeto FormData
  formData.set("price", String(priceDb));
  const { url, options } = postTransferInvoiceApi(
    token,
    jsonFormatterFormData(formData)
  );
  const response = await fetch(url, options);
  const json = await response.json();
  revalidatePath("/transacoes/list");
  if (json.data && json.data[0].id) {
    return {
      data: {
        errors: {
          description: "",
          price: "",
          due_at: "",
          walletIdIn: "",
          walletIdOut: "",
          categoryIdIn: "",
          categoryIdOut: "",
        },
        message: "Registro salvo com sucesso",
        status: true,
        type: "succes",
      },
    };
  }

  return {
    data: {
      errors: {
        description: "",
        price: "",
        due_at: "",
        walletIdIn: "",
        walletIdOut: "",
        categoryIdIn: "",
        categoryIdOut: "",
      },
      message: "Nào foi possivel salvar contate o admin",
      status: false,
      type: "error",
    },
  };
}
