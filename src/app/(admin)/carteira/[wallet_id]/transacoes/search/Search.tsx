"use client";
import { useEffect, useState } from "react";
import Input from "@/components/form/Input";
import { useRouter, usePathname } from "next/navigation";

const Search = ({ date }: any) => {
  const [dateOne, setDateOne] = useState("");
  const [dateTwo, setDateTwo] = useState("");

  const { replace } = useRouter();
  const pathName = usePathname();

  function search() {
    replace(`${pathName}?dateone=${dateOne}&datetwo=${dateTwo}`);
  }

  useEffect(() => {
    setDateOne(date.dateone);
    setDateTwo(date.datetwo);
  }, []);

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
            defaultValue={dateOne}
          />
        </div>
        <div className="w-full">
          <Input
            onChange={(e) => {
              setDateTwo(e.target.value);
            }}
            name="data_two"
            type="date"
            defaultValue={dateTwo}
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
