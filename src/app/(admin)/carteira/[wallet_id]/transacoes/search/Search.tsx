"use client";
import { useState } from "react";
import Input from "@/components/form/Input";
import SearchIcon from "@/components/icons/SearchIcon";
import { useRouter, usePathname } from "next/navigation";
import Select from "@/components/form/Select";

// const date = new Date();
// const year = date.getFullYear();
// const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
// const month =
//   date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;

// const dateNow = `${year}-${month}-${day}`;

const Search = ({ wallet }: any) => {
  const [dateOne, setDateOne] = useState("");
  const [dateTwo, setDateTwo] = useState("");
  const [walletId, setwalletId] = useState("");

  const { replace } = useRouter();
  const pathName = usePathname();

  function search() {
    replace(
      `${pathName}?dateone=${dateOne}&datetwo=${dateTwo}&walletId=${walletId}`
    );
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
          <Select
            name="wallet"
            onChange={(e) => {
              setwalletId(e.target.value);
            }}
          >
            <option value="">Escolha...</option>
            {wallet.data.map((item: any) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </Select>
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
