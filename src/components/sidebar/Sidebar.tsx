import Image from "next/image";
import Link from "next/link";
import DashIcon from "../icons/DashIcon";

const Sidebar = () => {
  const darkmode = true;

  return (
    <>
      <aside className="w-64 bg-base-gray h-screen fixed dark:bg-base-black">
        <div className="w-full mt-6">
          <Image
            src="/images/logo/logo-light.png"
            width={70}
            height={70}
            alt="logo wcapp"
            className="mx-auto"
          />
        </div>
        <nav>
          <ul>
            <li>
              <Link
                href="/dash"
                className="flex gap-2 text-font-color-light  dark:text-font-color-dark"
              >
                <DashIcon colors={darkmode ? "#1c1d21" : "#f8f8f8"} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/transacoes">Transações</Link>
            </li>
            <li>
              <Link href="/dash">Transações</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
