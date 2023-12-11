interface Props {
  children?: React.ReactNode;
}

const CardStyle = ({ children }: Props) => {
  return (
    <div className="bg-base-gray dark:bg-base-black w-full h-full p-6 flex flex-col gap-6 rounded-2xl">
      {children}
    </div>
  );
};

export default CardStyle;
