"use client";
import {
  WalletMinimal,
  LayoutDashboard,
  Plus,
  List,
  Tag,
  Binoculars,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BtnActionSubMenu from "../btn/BtnActionSubMenu";
import {
  ModalChooseTransaction,
  useModalChooseTransaction,
} from "@/components/modal/Modalchoosetransaction";
import Link from "next/link";

interface SubMenuProps {
  walletId: string;
}

const SubMenu = ({ walletId }: SubMenuProps) => {
  const { isOpen, setIsOpen } = useModalChooseTransaction();
  return (
    <>
      <div className="fixed md:static bottom-0 z-10 bg-white dark:bg-transparent   md:bg-inherit w-full flex flex-col md:flex-row justify-between md:gap-12 items-center md:mb-5 py-6 px-3 md:px-0 border-t md:border-t-0 border-base-gray dark:border-base-black">
        <nav className="md:mb-5">
          <ul className="flex gap-4">
            <li>
              <Button
                asChild
                className="gap-2 bg-base-secondary dark:text-base-white"
              >
                <Link title="Lista de carteiras" href="/">
                  <WalletMinimal color="#fff" size={16} />
                  <p className="hidden md:block text-sm">Carteiras</p>
                </Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                className="gap-2 bg-base-secondary dark:text-base-white"
              >
                <Link title="Lista de carteiras" href={`/carteira/${walletId}`}>
                  <LayoutDashboard color="#fff" size={16} />
                  <p className="hidden md:block text-sm">Painel</p>
                </Link>
              </Button>
            </li>
            <li>
              {/*  */}
              <Button
                onClick={() => {
                  setIsOpen(true);
                }}
                className="gap-2 bg-base-secondary dark:text-base-white"
              >
                <Plus color="#fff" size={15} />
                <p className="hidden md:block text-sm">Adicionar</p>
              </Button>
            </li>
            <li>
              <Button
                asChild
                className="gap-2 bg-base-secondary dark:text-base-white"
              >
                <Link
                  title="transacoes"
                  href={`/carteira/${walletId}/transacoes/list`}
                >
                  <List color="#fff" size={16} />
                  <p className="hidden md:block text-sm">Transações</p>
                </Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                className="gap-2 bg-base-secondary dark:text-base-white"
              >
                <Link
                  title="Nova categoria"
                  href={`/carteira/${walletId}/categorias/list`}
                >
                  <Tag color="#fff" size={16} />
                  <p className="hidden md:block text-sm">Categorias</p>
                </Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                className="gap-2 bg-base-secondary dark:text-base-white"
              >
                <Link
                  title="Nova categoria"
                  href={`/carteira/${walletId}/category-flow`}
                >
                  <Binoculars color="#fff" size={16} />
                  <p className="hidden md:block text-sm">Categoria fluxo</p>
                </Link>
              </Button>
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
