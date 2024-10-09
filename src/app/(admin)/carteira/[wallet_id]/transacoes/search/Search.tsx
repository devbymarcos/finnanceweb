"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Search = ({ date, loading }: any) => {
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
            className="border-base-secondary"
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
            className="border-base-secondary"
          />
        </div>
        <div className="w-full">
          <Button
            onClick={search}
            className="bg-base-secondary px-3 py-3 w-full text-white    rounded-lg"
          >
            Buscar
          </Button>
        </div>
      </div>
    </>
  );
};

export default Search;
