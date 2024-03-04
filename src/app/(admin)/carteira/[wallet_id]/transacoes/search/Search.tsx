"use client";
import { useState } from "react";
import Input from "@/components/form/Input";
import { useRouter, usePathname } from "next/navigation";

const Search = ({ wallet, params }: any) => {
  const [dateOne, setDateOne] = useState("");
  const [dateTwo, setDateTwo] = useState("");
  const [walletId, setwalletId] = useState("");

  const { replace } = useRouter();
  const pathName = usePathname();

  function search() {
    replace(`${pathName}?dateone=${dateOne}&datetwo=${dateTwo}`);
  }

  return (
    <>
      <div className="flex  flex-col items-center md:flex-row gap-2 mb-3  ">
        <div className="w-full">
          <Input
            onChange={(e) => {
              setDateOne(e.target.value);
            }}
            name="data_one"
            type="date"
          />
        </div>
        <div className="w-full">
          <Input
            onChange={(e) => {
              setDateTwo(e.target.value);
            }}
            name="data_two"
            type="date"
          />
        </div>
        <div className="w-full">
          <button
            onClick={search}
            className="bg-base-secondary px-3 py-3 w-full text-white font-bold text-lg   rounded-lg"
          >
            Buscar
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
