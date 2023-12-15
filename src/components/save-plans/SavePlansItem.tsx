type Props = {
  title: string;
  type: "income" | "expense";
  value: string;
};

const SavePlansItem = ({ title, type, value }: Props) => {
  return (
    <div className=" p-1 flex gap-4 items-center -mb-3 justify-between">
      <div className="flex gap-4 items-center">
        <div className="p-3 rounded-lg bg-base-yellow">
          {type == "income" && <IncomeIconType />}
          {type == "expense" && <ExpenseIconType />}
        </div>
        <p className="text-base-black dark:text-base-white">{title}</p>
      </div>
      <p className="text-base-black dark:text-base-white">R$ {value}</p>
    </div>
  );
};

export default SavePlansItem;

const IncomeIconType = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </svg>
    </>
  );
};
const ExpenseIconType = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    </>
  );
};
