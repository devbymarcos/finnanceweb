"use client";
import { useRouter } from "next/navigation";
type Props = {
  children: React.ReactNode;
};

const BackPage = ({ children }: Props) => {
  const { back } = useRouter();
  function backPageGo() {
    back();
  }

  return (
    <button
      onClick={backPageGo}
      className="px-4 py-2 my-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg "
    >
      {children}
    </button>
  );
};

export default BackPage;
