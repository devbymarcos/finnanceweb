"use server";
import { z } from "zod";
import { postInvoiceApi } from "@/http/api";
import { cookies } from "next/headers";
import { jsonFormatterFormData } from "@/functions/helpers";
import { currency } from "remask";
import { revalidatePath } from "next/cache";

const schema = z.object({
  description: z.string().min(8, "escreva uma descrição"),
  price: z.string().min(1, "Prencha um valor"),
  due_at: z.string().min(10, "Preencha a Data"),
  type: z.string().min(6, "Escolha o tipo"),
  wallet_id: z.string().min(1, "Selecione a cateira"),
  category_id: z.string().min(1, "Selecione a categoria"),
  pay: z.string().min(4, "Escolha o status de pagamento"),
  repeat_when: z.string().min(3, "Escolha a repetição se 'Única' ou 'Mês'"),
  installments: z.string().min(1, "informe a quantidade de repetições"),
});

export async function postTransaction(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    description: formData.get("description"),
    price: formData.get("price"),
    due_at: formData.get("due_at"),
    type: formData.get("type"),
    wallet_id: formData.get("wallet_id"),
    category_id: formData.get("category_id"),
    pay: formData.get("pay"),
    repeat_when: formData.get("repeat_when"),
    installments: formData.get("installments"),
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
  //Remoção da mask para Database
  const priceDb = currency.unmask({
    locale: "pt-BR",
    currency: "BRL",
    value: String(formData.get("price")),
  });
  //adicionado valor de volta ao objeto FormData
  formData.set("price", String(priceDb));
  const { url, options } = postInvoiceApi(
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
          repeat_when: "",
          installments: "",
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
        type: "",
        wallet_id: "",
        category_id: "",
        pay: "",
        repeat_when: "",
        installments: "",
      },
      message: "Nào foi possivel salvar contate o admin",
      status: false,
      type: "error",
    },
  };
}
