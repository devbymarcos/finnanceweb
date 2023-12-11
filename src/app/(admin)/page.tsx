import DashIcon from "@/components/icons/DashIcon";
import CardStyle from "../../components/cards/CardStyle";
import HeaderDash from "./dash/HeaderDash";
import dynamic from "next/dynamic";

const ChartPieDash = dynamic(() => import("@/app/(admin)/dash/ChartPieDash"), {
  ssr: false,
});

const ChartAreaDash = dynamic(
  () => import("@/app/(admin)/dash/ChartAreaDash"),
  {
    ssr: false,
  }
);

function Index() {
  return (
    <>
      <HeaderDash />
      <section className=" grid  grid-cols-1 md:grid-cols-3 gap-5 mb-5">
        <div className="grid grid-cols-1 gap-5">
          <CardStyle>
            <h3 className="text-xl text-base-yellow uppercase font-bold">
              Total Income
            </h3>
            <p className="text-2xl text-base-black dark:text-base-white font-bold ">
              R$ 90.000,00
            </p>
          </CardStyle>
          <CardStyle>
            <h3 className="text-xl text-base-yellow uppercase font-bold">
              Total Expense
            </h3>
            <p className="text-2xl text-base-black dark:text-base-white font-bold">
              R$ 80.000,00{" "}
            </p>
          </CardStyle>
        </div>
        <div>
          <CardStyle>
            <h3 className="text-base-yellow first-line:font-bold text-lg">
              Analytics
            </h3>
            <div className="  items-center">
              <ChartPieDash value={[90]} />
              <p className="text-center  font-bold text-base-black dark:text-base-white">
                Income
              </p>
            </div>
            <div className=" items-center">
              <ChartPieDash value={[50]} />
              <p className="font-bold text-center text-base-black dark:text-base-white">
                Expense
              </p>
            </div>
          </CardStyle>
        </div>
        <div>
          <CardStyle>
            <h3 className="text-base-yellow first-line:font-bold text-lg">
              Saving Plans
            </h3>
          </CardStyle>
        </div>
        <div className="sm:col-span-2">
          <CardStyle>
            <h3 className="text-base-yellow first-line:font-bold text-lg">
              Profit
            </h3>
            <ChartAreaDash />
          </CardStyle>
        </div>
      </section>
    </>
  );
}

export default Index;
