import BtnLinkSubMenu from "@/components/btn/BtnLinkSubMenu";
import CreateIcon from "@/components/icons/CreateIcon";
import ListIcon from "@/components/icons/ListIcon";
import TransfIcon from "@/components/icons/TransfIcon";
type PropslayoutWallet = {
  params: {
    wallet_id: string;
  };
  children: React.ReactNode;
};

const layoutWallet = ({ children, params }: PropslayoutWallet) => {
  return (
    <>
      <nav className=" mb-12">
        <ul className="flex gap-4">
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
      {children}
    </>
  );
};

export default layoutWallet;
