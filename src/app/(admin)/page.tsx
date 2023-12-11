import DashIcon from "@/components/icons/DashIcon";
import CardDashStyle from "./dash/CardDashStyle";
import HeaderDash from "./dash/HeaderDash";
import ChartPieDash from "./dash/ChartPieDash";

function Index() {
  return (
    <>
      <HeaderDash />
      <section className=" grid grid-cols-3 gap-5">
        <div className="grid grid-cols-1 gap-5">
          <CardDashStyle>
            <h3 className="text-xl text-base-black dark:text-base-white font-bold">
              Total Income
            </h3>
            <p className="text-2xl font-bold">R$ 90.000,00</p>
          </CardDashStyle>
          <CardDashStyle>
            <h3 className="text-xl text-base-black dark:text-base-white font-bold">
              Total Expense
            </h3>
            <p className="text-2xl font-bold">R$ 80.000,00 </p>
          </CardDashStyle>
        </div>
        <div>
          <CardDashStyle>
            <h3 className="text-base-yellow first-line:font-bold text-lg">
              ANALYTICS
            </h3>
            <ChartPieDash value={90} />
            <ChartPieDash value={50} />
          </CardDashStyle>
        </div>
      </section>
    </>
  );
}

export default Index;
