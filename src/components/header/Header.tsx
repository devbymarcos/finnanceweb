import BtnMenuMobile from "@/components/btn-menu-mobile/BtnMenumobile";
import Image from "next/image";
import BtnChangeModeTheme from "@/components/btn-dark-mode/BtnChangeModeTheme";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between bg-base-white dark:bg-base-black-200 items-center mb-12 fixed z-30 header-w-custom w-full md:pl-[270px] pl-6 pr-6 pt-2 pb-4">
      <div className="hidden md:block">
        <h1 className="text-base-secondary font-bold">Wallet Control</h1>
        <p className="font-bold text-base-black dark:text-base-white">
          Olá Marcos, Bem vindo de volta
        </p>
      </div>
      <div className="flex gap-6 items-center">
        <BtnChangeModeTheme />
        <Image
          className="rounded-full"
          src="/user.jpg"
          width={60}
          height={60}
          alt="user avatar"
        />
        <div className="text-base-black dark:text-base-white font-bold">
          <p className="text-base-secondary font-bold">Marcos</p>
          <Link href="/perfil/editar">Perfil</Link>
        </div>
      </div>
      <BtnMenuMobile />
    </header>
  );
};

export default Header;
