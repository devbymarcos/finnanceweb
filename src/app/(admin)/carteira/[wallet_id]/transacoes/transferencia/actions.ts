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
  wallet_entry: z.string().min(1, "Selecione a cateira"),
  wallet_exit: z.string().min(1, "Selecione a cateira"),
  category_idOut: z.string().min(1, "Selecione a categoria"),
  category_idIn: z.string().min(1, "Selecione a categoria"),
});

export async function postTranfer(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    description: formData.get("description"),
    price: formData.get("price"),
    due_at: formData.get("due_at"),
    wallet_entry: formData.get("wallet_entry"),
    wallet_exit: formData.get("wallet_exit"),
    category_idOut: formData.get("category_idOut"),
    category_idIn: formData.get("category_idIn"),
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
          wallet_entry: "",
          wallet_exit: "",
          category_idIn: "",
          category_idOut: "",
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
        wallet_entry: "",
        wallet_exit: "",
        category_idIn: "",
        category_idOut: "",
      },
      message: "Nào foi possivel salvar contate o admin",
      status: false,
      type: "error",
    },
  };
}
