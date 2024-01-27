"use client";
import { useEffect, useRef, MutableRefObject } from "react";

type Props = {
  title: string;
  type: "income" | "expense";
  value: string;
  percentage: string;
};

const SavePlansItem = ({ title, type, value, percentage }: Props) => {
  const spanRef: MutableRefObject<HTMLSpanElement | null> = useRef(null);

  function modifyElement(value: string) {
    const item = spanRef.current!;
    item.style.transitionDuration = "0.5s";
    item.style.width = value + "%";
    item.style.backgroundColor = "#0984e3";
  }

  useEffect(() => {
    modifyElement(percentage);
  }, []);
  return (
    <div className=" p-1 flex gap-4 items-center -mb-3">
      <div className="p-2 rounded-xl bg-base-secondary">
        {type == "income" && <IncomeIconType />}
        {type == "expense" && <ExpenseIconType />}
      </div>
      <div className="w-full">
        <div className="w-full flex gap-2 justify-between">
          <p
            className="text-base-black dark:text-base-white text-sm
          "
          >
            {title}
          </p>
          <p className="text-base-black dark:text-base-white font-bold text-sm">
            R${value}
          </p>
        </div>
        <div className="w-full h-2 bg-white  rounded-full">
          <span
            ref={spanRef}
            className={` w-0 h-2 bg-white   block rounded-full`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default SavePlansItem;

const IncomeIconType = () => {
  return (
    <>
      <svg
        width="15"
        height="15"
        viewBox="0 0 97 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.8287 50.9241L22.5026 46.1487C7.50094 41.1481 0 38.6478 0 34.053C0 29.4581 7.50088 26.9579 22.5027 21.9573L76.7742 3.86679C87.3299 0.348266 92.6078 -1.41101 95.3936 1.37497C98.1795 4.16093 96.42 9.43879 92.9016 19.9945L74.8113 74.266C69.8108 89.2677 67.3105 96.7685 62.7154 96.7685C58.1206 96.7685 55.6203 89.2677 50.6198 74.266L45.8444 59.9395L73.5981 32.1858C76.0876 29.6962 76.0876 25.6598 73.5981 23.1702C71.1087 20.6806 67.0721 20.6806 64.5826 23.1702L36.8287 50.9241Z"
          fill="#038728"
        />
      </svg>
    </>
  );
};
const ExpenseIconType = () => {
  return (
    <>
      <svg
        width="15"
        height="15"
        viewBox="0 0 97 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.9397 45.8444L74.2659 50.6198C89.2675 55.6204 96.7685 58.1207 96.7685 62.7155C96.7685 67.3104 89.2676 69.8106 74.2658 74.8112L19.9943 92.9017C9.43859 96.4203 4.16072 98.1795 1.37485 95.3936C-1.41103 92.6076 0.348481 87.3297 3.86684 76.7741L21.9572 22.5025C26.9577 7.50082 29.458 -1.74493e-06 34.0531 -2.14664e-06C38.6479 -2.54833e-06 41.1482 7.50082 46.1487 22.5025L50.9241 36.829L23.1703 64.5827C20.6809 67.0723 20.6809 71.1087 23.1703 73.5983C25.6598 76.0879 29.6964 76.0879 32.1859 73.5983L59.9397 45.8444Z"
          fill="#E03125"
        />
      </svg>
    </>
  );
};
