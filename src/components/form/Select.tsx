import { Children } from "react";

interface Props {
  children: React.ReactNode;
  defaultValue?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
}

const Select = ({
  children,
  defaultValue,
  placeholder,
  name,
  required,
}: Props) => {
  return (
    <select
      className="rounded-md w-full py-3 px-2 outline-none  bg-base-white dark:text-base-white text-base-black dark:bg-base-black border border-base-secondary"
      defaultValue={defaultValue}
      placeholder={placeholder}
      name={name}
      required={required}
    >
      {children}
    </select>
  );
};

export default Select;
