"use client";

type Props = {
  message: string;
  type: "succes" | "error";
  active: boolean;
};

export const Alert = ({ message, type, active }: Props) => {
  return (
    <div
      className={`${active ? "block" : "hidden"} ${
        type == "succes" ? "bg-green-400" : ""
      } ${
        type == "error" ? "bg-red-500" : ""
      }  px-9 py-4 font-bold fixed left-1/2 top-20 -translate-x-1/2 rounded-md text-center min-w-[250px] animate-slide-down`}
    >
      <p>{message}</p>
    </div>
  );
};
