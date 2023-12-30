interface Props {
  children?: React.ReactNode;
}

const Label = ({ children }: Props) => {
  return (
    <label className="block dark:text-base-white text-base-black mb-1 text-sm">
      {children}
    </label>
  );
};

export default Label;
