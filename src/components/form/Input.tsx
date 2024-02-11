interface Props {
  id?: string;
  type: string;
  value?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  onChange?: (e: any) => void;
  defaultValue?: string;
}

const Input = ({
  id,
  type,
  placeholder,
  name,
  required,
  onChange,
  defaultValue,
}: Props) => {
  return (
    <input
      id={id}
      type={type}
      className="rounded-md w-full py-3 px-2 outline-none  bg-base-white dark:text-base-white text-base-black dark:bg-base-black border border-base-secondary"
      defaultValue={defaultValue}
      placeholder={placeholder}
      name={name}
      required={required}
      onChange={onChange}
    />
  );
};

export default Input;
