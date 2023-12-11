interface Props {
  children?: React.ReactNode;
}

const CardDashStyle = ({ children }: Props) => {
  return (
    <div className="bg-base-gray w-full h-full p-6 flex flex-col gap-6 rounded-2xl">
      {children}
    </div>
  );
};

export default CardDashStyle;
