"use server";
import { z } from "zod";
import { deleteInvoiceApi, putInvoiceApi } from "@/http/api";
import { cookies } from "next/headers";
import { jsonFormatterFormData } from "@/functions/helpers";
import { currency } from "remask";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const schema = z.object({
  description: z.string().min(8, "escreva uma descrição"),
  price: z.string().min(1, "Prencha um valor"),
  due_at: z.string().min(10, "Preencha a Data"),
  type: z.string().min(6, "Escolha o tipo"),
  wallet_id: z.string().min(1, "Selecione a cateira"),
  category_id: z.string().min(1, "Selecione a categoria"),
  pay: z.string().min(4, "Escolha o status de pagamento"),
});

export async function UpdateTransaction(prevState: any, formData: FormData) {
  console.log(formData.get("delete"));
  if (formData.get("delete") === "true") {
    const id = String(formData.get("id"));
    const token: string | undefined = cookies().get("token")?.value;
    const { url, options } = deleteInvoiceApi(token, id);

    const response = await fetch(url, options);
    const json = await response.json();
    const wallet_id = formData.get("wallet_id");
    revalidatePath(`/carteira/${wallet_id}/transacoes/list`);
    redirect(`/carteira/${wallet_id}/transacoes/list`);
  }

  const validatedFields = schema.safeParse({
    description: formData.get("description"),
    price: formData.get("price"),
    due_at: formData.get("due_at"),
    type: formData.get("type"),
    wallet_id: formData.get("wallet_id"),
    category_id: formData.get("category_id"),
    pay: formData.get("pay"),
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

  //remove mask on FormData
  const priceDb = currency.unmask({
    locale: "pt-BR",
    currency: "BRL",
    value: String(formData.get("price")),
  });
  formData.set("price", String(priceDb));
  //################End #########################/

  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = putInvoiceApi(
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
          type: "",
          wallet_id: "",
          category_id: "",
          pay: "",
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
        description: "",
        price: "",
        due_at: "",
        type: "",
        wallet_id: "",
        category_id: "",
        pay: "",
      },
      message: "Nào foi possivel atualizar contate o admin",
      status: false,
      type: "error",
    },
  };
}
