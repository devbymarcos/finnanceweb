"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

import { ArrowLeftRight, Minus, Plus } from "lucide-react";
import Link from "next/link";

interface ModalChooseTransactionProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  walletId: string;
}

export const useModalChooseTransaction = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return {
    isOpen,
    setIsOpen,
  };
};

export const ModalChooseTransaction = ({
  isOpen,
  setIsOpen,
  walletId,
}: ModalChooseTransactionProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        as="div"
        className="relative z-10 focus:outline-none"
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-25">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white px-6 py-10 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {/* <BtnLinkSubMenu
                title="Adicionar transação"
                
              >
                <Plus color="#fff" size={15} />
                <p className="hidden md:block text-sm">Adicionar</p>
              </BtnLinkSubMenu> */}
              <DialogTitle className="text-center mb-6 text-base-secondary font-bold">
                Escolha a Transação
              </DialogTitle>
              <Link
                href={`/carteira/${walletId}/transacoes/nova`}
                className="border border-green-400 px-4 py-4 text-center   font-bols rounded-lg flex justify-between items-center font-bold text-green-800 mb-3"
              >
                Recebimento
                <Plus color="#166534" size={15} />
              </Link>
              <Link
                href={`/carteira/${walletId}/transacoes/nova`}
                className="border border-red-400 px-4 py-4 text-center   font-bols rounded-lg flex justify-between items-center font-bold text-red-800 mb-3"
              >
                Pagamento
                <Minus color="#166534" size={15} />
              </Link>
              <Link
                href={`/carteira/${walletId}/transacoes/transferencia`}
                className="border border-blue-400 px-4 py-4 text-center   font-bols rounded-lg flex justify-between items-center font-bold text-blue-800 mb-3"
              >
                Pagar entre carteira
                <ArrowLeftRight color="#166534" size={15} />
              </Link>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
