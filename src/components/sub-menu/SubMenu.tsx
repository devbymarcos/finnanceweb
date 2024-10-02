"use client";
import {
  WalletMinimal,
  LayoutDashboard,
  Plus,
  List,
  ArrowLeftRight,
  Tag,
} from "lucide-react";
import BtnLinkSubMenu from "../btn/BtnLinkSubMenu";
import BtnActionSubMenu from "../btn/BtnActionSubMenu";
import {
  ModalChooseTransaction,
  useModalChooseTransaction,
} from "@/components/modal/Modalchoosetransaction";

interface SubMenuProps {
  walletId: string;
}

const SubMenu = ({ walletId }: SubMenuProps) => {
  const { isOpen, setIsOpen } = useModalChooseTransaction();
  return (
    <>
      <div className="fixed md:static bottom-0 z-10 bg-white dark:bg-base-black md:bg-inherit w-full flex flex-col md:flex-row justify-between md:gap-12 items-center md:mb-5 py-6 ">
        <nav className="md:mb-5">
          <ul className="flex gap-4">
            <li>
              <BtnLinkSubMenu title="Lista de carteiras" href={`/`}>
                <WalletMinimal color="#fff" size={16} />
                <p className="hidden md:block text-sm">Carteiras</p>
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu title="Painel" href={`/carteira/${walletId}`}>
                <LayoutDashboard color="#fff" size={16} />
                <p className="hidden md:block text-sm">Painel</p>
              </BtnLinkSubMenu>
            </li>
            <li>
              {/*  */}
              <BtnActionSubMenu
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <Plus color="#fff" size={15} />
                <p className="hidden md:block text-sm">Adicionar</p>
              </BtnActionSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                title="Listar Transações"
                href={`/carteira/${walletId}/transacoes/list`}
              >
                <List color="#fff" size={16} />
                <p className="hidden md:block text-sm">Transações</p>
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                title="Nova categoria"
                href={`/carteira/${walletId}/categorias/nova`}
              >
                <Tag color="#fff" size={16} />
                <p className="hidden md:block text-sm">Categorias</p>
              </BtnLinkSubMenu>
            </li>
          </ul>
        </nav>
      </div>
      <ModalChooseTransaction
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        walletId={walletId}
      />
    </>
  );
};

export default SubMenu;
