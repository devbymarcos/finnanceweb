import BtnLinkSubMenu from "@/components/btn/BtnLinkSubMenu";
import CardStyle from "@/components/cards/CardStyle";
import SubMenu from "@/components/sub-menu/SubMenu";
import { getWalletApi } from "@/http/api";
import { cookies } from "next/headers";

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
      <div className="mb-3">
        <SubMenu walletId={params.wallet_id} />
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
