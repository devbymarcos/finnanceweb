import BtnLinkSubMenu from "@/components/btn/BtnLinkSubMenu";
import CardStyle from "@/components/cards/CardStyle";
import SubMenu from "@/components/sub-menu/SubMenu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <Card>
          <CardHeader>
            <CardTitle className="text-base-secondary">
              Carteira Selecionada
            </CardTitle>
            <p className="text-xl text-base-black dark:text-base-white font-bold">
              {walletActivate}
            </p>
          </CardHeader>
        </Card>
      </div>
      {children}
    </>
  );
};

export default layoutWallet;
