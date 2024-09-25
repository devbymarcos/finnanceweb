import BtnLinkSubMenu from "@/components/btn/BtnLinkSubMenu";
import CardStyle from "@/components/cards/CardStyle";
import { getWalletApi } from "@/http/api";
import { cookies } from "next/headers";
import CategoryFlowIcon from "@/components/icons/CategoryFLowIcon";
import {
  WalletMinimal,
  LayoutDashboard,
  Plus,
  List,
  ArrowLeftRight,
} from "lucide-react";
type PropslayoutWallet = {
  params: {
    wallet_id: string;
  };
  children: React.ReactNode;
};

async function getWallet() {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getWalletApi(token);
  const response = await fetch(url, options);
  return response.json();
}

const layoutWallet = async ({ children, params }: PropslayoutWallet) => {
  const wallets = await getWallet();
  let walletActivate: string = "";
  wallets.data.forEach((wallet: any) => {
    if (wallet.id == params.wallet_id) {
      walletActivate = wallet.name;
    }
  });

  return (
    <>
      <div className="fixed md:static bottom-0 z-10 bg-white md:bg-inherit w-full flex flex-col md:flex-row justify-between md:gap-12 items-center md:mb-5 py-6 ">
        <nav className="md:mb-5">
          <ul className="flex gap-4">
            <li>
              <BtnLinkSubMenu title="Lista de carteiras" href={`/`}>
                <WalletMinimal color="#fff" size={16} />
                <p className="hidden md:block text-sm">Carteiras</p>
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                title="Painel"
                href={`/carteira/${params.wallet_id}`}
              >
                <LayoutDashboard color="#fff" size={16} />
                <p className="hidden md:block text-sm">Painel</p>
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                title="Adicionar transação"
                href={`/carteira/${params.wallet_id}/transacoes/nova`}
              >
                <Plus color="#fff" size={15} />
                <p className="hidden md:block text-sm">Adicionar</p>
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                title="Listar Transações"
                href={`/carteira/${params.wallet_id}/transacoes/list`}
              >
                <List color="#fff" size={16} />
                <p className="hidden md:block text-sm">Transações</p>
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                title="Tranferencia"
                href={`/carteira/${params.wallet_id}/transacoes/transferencia`}
              >
                <ArrowLeftRight color="#fff" size={16} />
                <p className="hidden md:block text-sm">Transferir</p>
              </BtnLinkSubMenu>
            </li>
            {/* <li>
              <BtnLinkSubMenu
                title="Gerar Fluxo"
                href={`/carteira/${params.wallet_id}/cf`}
              >
                <CategoryFlowIcon colors="#fff" />
                <p className="hidden md:block">Fluxo categoria</p>
              </BtnLinkSubMenu>
            </li> */}
          </ul>
        </nav>
      </div>
      <div className="mb-3">
        <CardStyle>
          <div className="flex gap-4 items-center">
            <div>
              <h3 className="text-sm text-base-secondary uppercase font-bold">
                Carteira Selecionada
              </h3>
              <p className="text-xl text-base-black dark:text-base-white font-bold">
                {walletActivate}
              </p>
            </div>
          </div>
        </CardStyle>
      </div>
      {children}
    </>
  );
};

export default layoutWallet;
