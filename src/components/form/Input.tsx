interface Props {
  type: string;
  value?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
}

const Input = ({ type, value, placeholder, name, required }: Props) => {
  return (
    <input
      type={type}
      className="rounded-md w-full py-3 px-2 outline-none  bg-base-white dark:text-base-white text-base-black dark:bg-base-black border border-base-yellow"
      value={value}
      placeholder={placeholder}
      name={name}
      required={required}
    />
  );
};

export default Input;
