import Link from "next/link";
import DashIcon from "../icons/DashIcon";
import CategoryIcon from "../icons/CategoryIcon";
import WalletIcon from "../icons/WalletIcons";
import TransactionIcon from "../icons/TransactionIcon";

const MenuSideBar = () => {
  const darkmode = false;

  const menuData = [
    {
      title: "Dashboard",
      icon: <DashIcon colors={darkmode ? "#f8f8f8" : "#1c1d21"} />,
      path: "/",
    },
    {
      title: "categorias",
      icon: <CategoryIcon colors={darkmode ? "#f8f8f8" : "#1c1d21"} />,
      path: "/",
    },
    {
      title: "Carterias",
      icon: <WalletIcon colors={darkmode ? "#f8f8f8" : "#1c1d21"} />,
      path: "/carteiras",
    },
    {
      title: "Transaçcões",
      icon: <TransactionIcon colors={darkmode ? "#f8f8f8" : "#1c1d21"} />,
      path: "/transacoes",
    },
  ];
  return (
    <>
      <nav className="mt-12 pb-12 ">
        <ul>
          {menuData.map((item) => {
            return (
              <>
                <li className="px-2 py-3">
                  <Link
                    href={item.path}
                    className="flex gap-4 pl-8 text-font-color-light  dark:text-font-color-dark  font-bold"
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default MenuSideBar;
