import CardStyle from "@/components/cards/CardStyle";
import WalletIcon from "@/components/icons/WalletIcons";
import BackBoneIcon from "@/components/icons/BackboneIcon";

const WalletSection = () => {
  return (
    <CardStyle>
      <h3 className="text-md text-base-black dark:text-base-white flex gap-3 items-center  font-bold">
        <WalletIcon />
        Minhas carteiras
      </h3>
      <div className="text-base-black dark:text-base-white">
        <ul className="w-full">
          <li className="mb-2 flex gap-2 bg-base-white dark:bg-base-black-200 items-center py-3 px-3 rounded-lg">
            <BackBoneIcon />
            <div className="w-full flex justify-between items-center ">
              <p>Padrão</p>
              <span>R$1.500,00</span>
            </div>
          </li>
          <li className="mb-2 flex gap-2 bg-base-white dark:bg-base-black-200 items-center py-3 px-3 rounded-lg">
            <BackBoneIcon />
            <div className="w-full flex justify-between items-center ">
              <p>Fatura</p>
              <span>R$1.500,00</span>
            </div>
          </li>
        </ul>
      </div>
    </CardStyle>
  );
};

export default WalletSection;
