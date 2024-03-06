import BtnLinkSubMenu from "@/components/btn/BtnLinkSubMenu";
import CreateIcon from "@/components/icons/CreateIcon";
import DashIcon from "@/components/icons/DashIcon";
import ListIcon from "@/components/icons/ListIcon";
import TransfIcon from "@/components/icons/TransfIcon";
import CardStyle from "@/components/cards/CardStyle";

type PropslayoutWallet = {
  params: {
    wallet_id: string;
  };
  children: React.ReactNode;
};

const layoutWallet = ({ children, params }: PropslayoutWallet) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:gap-12 items-center mb-5">
        <nav className="mb-12">
          <ul className="flex gap-4">
            <li>
              <BtnLinkSubMenu href={`/carteira/${params.wallet_id}`}>
                <DashIcon />
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                href={`/carteira/${params.wallet_id}/transacoes/list`}
              >
                <ListIcon />
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                href={`/carteira/${params.wallet_id}/transacoes/nova`}
              >
                <CreateIcon />
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                href={`/carteira/${params.wallet_id}/transacoes/transferencia`}
              >
                <TransfIcon />
              </BtnLinkSubMenu>
            </li>
          </ul>
        </nav>
        {
          //TODO NESTE CARD É PRECISO DEFINIR COMO VAMOS TRAZER O NOME DA CARTEIRA ATIVA
        }
        <CardStyle>
          <div className="flex gap-4 items-center">
            <div>
              <h3 className="text-sm text-base-secondary uppercase font-bold">
                Carteira Ativa
              </h3>
              <p className="text-2xl text-base-black dark:text-base-white font-bold">
                Minha carteira
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
