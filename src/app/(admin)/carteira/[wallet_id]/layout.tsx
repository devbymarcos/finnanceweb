import TransactionIcon from "@/components/icons/TransactionIcon";
import Link from "next/link";

type PropslayoutWallet = {
  children: React.ReactNode;
};

const layoutWallet = ({ children }: PropslayoutWallet) => {
  return (
    <>
      <nav>
        <li>
          <Link href="/carteira/transacoes?wallet_id">
            <TransactionIcon colors="#fff" />
          </Link>
        </li>
      </nav>
      {children}
    </>
  );
};

export default layoutWallet;
