import { Children } from "react";

interface Props {
  children: React.ReactNode;
  value?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
}

const Select = ({ children, value, placeholder, name, required }: Props) => {
  return (
    <select
      className="rounded-md w-full py-3 px-2 outline-none  bg-base-white dark:text-base-white text-base-black dark:bg-base-black border border-base-secondary"
      value={value}
      placeholder={placeholder}
      name={name}
      required={required}
    >
      {children}
    </select>
  );
};

export default Select;
