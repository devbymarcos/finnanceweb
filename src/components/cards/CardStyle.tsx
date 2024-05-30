interface Props {
  children?: React.ReactNode;
}

const CardStyle = ({ children }: Props) => {
  return (
    <div className="bg-base-white dark:bg-base-black w-full h-full p-6 flex flex-col gap-6 rounded-lg">
      {children}
    </div>
  );
};

export default CardStyle;
