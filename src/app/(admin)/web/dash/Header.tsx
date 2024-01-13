import BtnMenuMobile from "@/components/btn-menu-mobile/BtnMenumobile";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-12">
      <div>
        <h1 className="text-base-yellow font-bold">Wallet Control</h1>
        <p className="font-bold text-base-black dark:text-base-white">
          Olá Marcos, Bem vindo de volta
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <Image
          className="rounded-full"
          src="/user.jpg"
          width={60}
          height={60}
          alt="user avatar"
        />
        <div className="text-base-black dark:text-base-white font-bold">
          <p className="text-base-yellow font-bold">Marcos</p>
          <p>Admin</p>
        </div>
      </div>
      <BtnMenuMobile />
    </header>
  );
};

export default Header;
