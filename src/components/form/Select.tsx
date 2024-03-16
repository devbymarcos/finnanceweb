interface Props {
  children: React.ReactNode;
  defaultValue?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  onChange?: (e: any) => void;
}

const Select = ({
  children,
  defaultValue,
  placeholder,
  name,
  required,
  onChange,
}: Props) => {
  return (
    <select
      className=" w-full  py-[0.9rem] px-2 outline-none  bg-base-white dark:text-base-white text-base-black dark:bg-base-black border border-base-secondary"
      defaultValue={defaultValue}
      placeholder={placeholder}
      name={name}
      required={required}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default Select;
