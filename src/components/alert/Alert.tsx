"use client";
import { useEffect, useState } from "react";

interface Params {
  message: string;
  type: "succes" | "error" | "";
  active: boolean;
}

export const Alert = ({ message, type, active }: Params) => {
  if (!active) return null;
  return (
    <div
      id="alert-custom"
      className={`  ${type == "succes" ? "bg-green-400" : ""} ${
        type == "error" ? "bg-red-500" : ""
      }   px-9 py-4 font-bold fixed right-[10%] top-20  rounded-md text-center min-w-[250px] text-white animate-slide-down   `}
    >
      <p>{message}</p>
    </div>
  );
};

//HOOK DE RENDERIZACAO DO COMPONENT
export const useAlert = () => {
  const [alert, setAlert] = useState<Params>({
    active: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    let time: any;
    if (alert.active) {
      time = setTimeout(() => {
        setAlert({
          active: false,
          message: "",
          type: "",
        });
      }, 2000);
    }
    return () => {
      clearTimeout(time);
    };
  }, [alert]);

  return {
    alert,
    setAlert,
  };
};
