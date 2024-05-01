export interface InputMaskTypes {
  type: string;
  value?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  onChange?: (e: any) => void;
  defaultValue?: string;
}

const InputMask = ({
  type,
  value,
  name,
  required,
  onChange,
}: InputMaskTypes) => {
  return (
    <input
      type={type}
      className="w-full py-3 px-2 outline-none  bg-base-white dark:text-base-white text-base-black dark:bg-base-black border border-base-secondary rounded-md"
      value={value}
      name={name}
      required={required}
      onChange={onChange}
    />
  );
};

export default InputMask;
