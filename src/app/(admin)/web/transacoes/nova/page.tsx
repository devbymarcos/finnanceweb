import CardStyle from "@/components/cards/CardStyle";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Submit from "@/components/form/Submit";

const CreateTransaction = () => {
  return (
    <section className="mb-12">
      <CardStyle>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mb-3 md:col-span-3">
              <Label>Descrição</Label>
              <Input type="text" name="description" />
            </div>
            <div className="mb-3">
              <Label>Valor</Label>
              <Input type="text" name="value" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-3">
              <Label>Data</Label>
              <Input type="date" name="due_at" />
            </div>
            <div className="mb-3">
              <Label>Tipo</Label>
              <Select name="type">
                <option>Escolha...</option>
                <option value="expense">Receitas</option>
                <option value="expense">Despesas</option>
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
            <Label>Repetir ? </Label>
            <Select name="repeat_when">
              <option>Escolha...</option>
              <option value="single">Única</option>
              <option value="month">Mês</option>
            </Select>
          </div>
          <div className="mb-3">
            <Label>Repetições</Label>
            <Input
              type="number"
              placeholder="Insira a quantidade de repetições ex: 1"
              name="installments"
            />
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
