// @ts-nocheck
"use client";
import Chart from "react-apexcharts";

const ChartAreaDash = ({ dataMonths, dataValues }) => {
  let options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "top",
      textAnchor: "ola",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: dataMonths,
    },
  };

  let series = [
    {
      name: "Resultado",
      data: dataValues,
    },
  ];

  return (
    <>
      <Chart options={options} height={350} series={series} type="area" />
    </>
  );
};

export default ChartAreaDash;
