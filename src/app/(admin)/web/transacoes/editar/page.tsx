import CardStyle from "@/components/cards/CardStyle";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Submit from "@/components/form/Submit";
import { getInvoiceIdApi, getWalletApi, getCategoryApi } from "@/api/api";
import { cookies } from "next/headers";
import { formattedDateInput, formattedDateView } from "@/functions/helpers";

async function getInvoiceId(invoiceId?: string) {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getInvoiceIdApi(token, invoiceId);
  const response = await fetch(url, options);
  return await response.json();
}

async function getWallet() {
  const token = cookies().get("token")?.value;
  const { url, options } = getWalletApi(token);
  const response = await fetch(url, options);
  return await response.json();
}

async function getCategory() {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getCategoryApi(token);
  const response = await fetch(url, options);

  return await response.json();
}

type Props = {
  searchParams?: {
    invoiceId?: string;
  };
};
const CreateTransaction = async ({ searchParams }: Props) => {
  const invoice = await getInvoiceId(searchParams?.invoiceId);
  const wallet = await getWallet();
  const category = await getCategory();

  console.log(formattedDateView(invoice.data[0].due_at));
  return (
    <section>
      <CardStyle>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mb-3 md:col-span-3">
              <Label>Descrição</Label>
              <Input
                type="text"
                name="description"
                defaultValue={invoice.data[0].description}
              />
            </div>
            <div className="mb-3">
              <Label>Valor</Label>
              <Input
                type="text"
                name="value"
                defaultValue={invoice.data[0].price}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-3">
              <Label>Data</Label>
              <Input
                type="date"
                name="due_at"
                defaultValue={formattedDateInput(invoice.data[0].due_at)}
              />
            </div>

            <div className="mb-3">
              <Label>Tipo</Label>
              <Select name="type">
                <option>Escolha...</option>
                <option
                  selected={invoice.data[0].type == "income" && true}
                  defaultValue="income"
                >
                  Receitas
                </option>
                <option
                  selected={invoice.data[0].type == "expense" && true}
                  defaultValue="expense"
                >
                  Despesas
                </option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mb-3">
              <Label>Carteira</Label>
              <Select name="wallet-id">
                <option>Escolha...</option>
                {wallet.data.map((item: any) => {
                  return (
                    <option
                      selected={invoice.data[0].wallet_id == item.id && true}
                      value={item.id}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </Select>
            </div>
            <div className="mb-3">
              <Label>Categoria</Label>
              <Select name="category_id">
                <option>Escolha...</option>

                {category.data.map((item: any) => {
                  return (
                    <option
                      selected={invoice.data[0].category_id == item.id && true}
                      value={item.id}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </Select>
            </div>
            <div className="mb-3">
              <Label>Pagamento status</Label>
              <Select name="pay">
                <option>Escolha...</option>
                <option
                  selected={invoice.data[0].pay == "paid" && true}
                  value="paid"
                >
                  Pago
                </option>
                <option
                  selected={invoice.data[0].pay == "unpaid" && true}
                  value="unpaid"
                >
                  Não pago
                </option>
              </Select>
            </div>
          </div>
          <div className="my-3 grid grid-cols-1 md:grid-cols-3">
            <Submit text="Salvar" />
          </div>
        </form>
      </CardStyle>
    </section>
  );
};

export default CreateTransaction;
