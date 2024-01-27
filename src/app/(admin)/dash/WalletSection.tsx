import CardStyle from "@/components/cards/CardStyle";
import WalletIcon from "@/components/icons/WalletIcons";
import WalletDashUiIcon from "@/components/icons/WalletDashUiIcon";
import { currencyFormatUI } from "@/functions/helpers";

type Props = {
  data: Array<{
    walletId: number;
    saldo: number;
    name: string;
  }>;
};

const WalletSection = ({ data }: Props) => {
  return (
    <CardStyle>
      <h3 className="text-md text-base-secondary  flex gap-3 items-center  font-bold">
        <WalletIcon />
        Minhas carteiras
      </h3>
      <div className="text-base-black dark:text-base-white">
        <ul className="w-full">
          {data.map((wallet) => {
            return (
              <li
                key={wallet.walletId}
                className="mb-2 flex gap-2 bg-base-white dark:bg-base-black-200 items-center py-3 px-3 rounded-lg"
              >
                <WalletDashUiIcon />
                <div className="w-full flex justify-between items-center ">
                  <p>{wallet.name}</p>
                  <span
                    className={`${
                      wallet.saldo < 0 ? "text-red-500" : "text-blue-500"
                    } font-bold text-lg`}
                  >
                    {currencyFormatUI(wallet.saldo)}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </CardStyle>
  );
};

export default WalletSection;
