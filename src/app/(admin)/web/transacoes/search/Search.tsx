"use client";
import { useState } from "react";
import Input from "@/components/form/Input";
import SearchIcon from "@/components/icons/SearchIcon";
import { useRouter, usePathname } from "next/navigation";

// const date = new Date();
// const year = date.getFullYear();
// const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
// const month =
//   date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;

// const dateNow = `${year}-${month}-${day}`;

const Search = () => {
  const [dateOne, setDateOne] = useState("");
  const [dateTwo, setDateTwo] = useState("");
  const { replace } = useRouter();
  const pathName = usePathname();

  function search() {
    replace(`${pathName}?dateone=${dateOne}&datetwo=${dateTwo}`);
    console.log(pathName);
  }

  return (
    <>
      <div className="flex gap-2 mb-3 items-center w-1/2">
        <div className="w-full">
          <Input
            onChange={(e) => {
              setDateOne(e.target.value);
            }}
            name="data_one"
            value={dateOne}
            type="date"
          />
        </div>
        <div className="w-full">
          <Input
            onChange={(e) => {
              setDateTwo(e.target.value);
            }}
            name="data_two"
            value={dateTwo}
            type="date"
          />
        </div>
        <div className="w-full">
          <button
            onClick={search}
            className="bg-base-secondary px-3 py-3 rounded-lg"
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
