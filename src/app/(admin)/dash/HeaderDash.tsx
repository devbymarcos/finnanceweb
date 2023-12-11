import BtnMenuMobile from "@/components/btn-menu-mobile/BtnMenumobile";

const HeaderDash = () => {
  return (
    <header className="flex justify-between items-center mb-12">
      <div>
        <h1 className="text-base-yellow font-bold">Dashboard</h1>
        <p className="font-bold text-base-black dark:text-base-white">
          Olá Marcos, Bem vindo de volta
        </p>
      </div>
      <BtnMenuMobile colors="#000" />
    </header>
  );
};

export default HeaderDash;
