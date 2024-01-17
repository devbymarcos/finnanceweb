import CardStyle from "@/components/cards/CardStyle";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Submit from "@/components/form/Submit";
import { getInvoiceIdApi } from "@/api/api";
import { cookies } from "next/headers";
import { formattedDateInput, formattedDateView } from "@/functions/helpers";

async function getInvoiceId(invoiceId?: string) {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getInvoiceIdApi(token, invoiceId);
  const response = await fetch(url, options);
  return await response.json();
}

type Props = {
  searchParams?: {
    invoiceId?: string;
  };
};
const CreateTransaction = async ({ searchParams }: Props) => {
  const data = await getInvoiceId(searchParams?.invoiceId);
  console.log(formattedDateView(data.data.due_at));
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
                value={data.data.description}
              />
            </div>
            <div className="mb-3">
              <Label>Valor</Label>
              <Input type="text" name="value" value={data.data.price} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-3">
              <Label>Data</Label>
              <Input
                type="date"
                name="due_at"
                value={formattedDateInput(data.data.due_at)}
              />
            </div>

            <div className="mb-3">
              <Label>Tipo</Label>
              <Select name="type">
                <option>Escolha...</option>
                <option
                  selected={data.data.type == "income" ? true : false}
                  value="income"
                >
                  Receitas
                </option>
                <option
                  selected={data.data.type == "expense" ? true : false}
                  value="expense"
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
                <option value="expense">wallet 1</option>
                <option value="expense">wallet 2</option>
              </Select>
            </div>
            <div className="mb-3">
              <Label>Categoria</Label>
              <Select name="category_id">
                <option>Escolha...</option>
                <option value="expense">wallet 1</option>
                <option value="expense">wallet 2</option>
              </Select>
            </div>
            <div className="mb-3">
              <Label>Pagamento status</Label>
              <Select name="pay">
                <option>Escolha...</option>
                <option value="paid">Pago</option>
                <option value="unpaid">Não pago</option>
              </Select>
            </div>
          </div>
          <div className="mb-3">
            <Submit text="Salvar" />
          </div>
        </form>
      </CardStyle>
    </section>
  );
};

export default CreateTransaction;
