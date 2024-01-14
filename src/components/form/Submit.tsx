"use client";
import { useFormStatus } from "react-dom";

const Submit = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();
  return (
    <button className="bg-base-secondary px-2 py-3 font-bold text-base-white w-full rounded-lg">
      {pending ? "Processando..." : text}
    </button>
  );
};

export default Submit;
