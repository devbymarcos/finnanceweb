// @ts-nocheck
"use client";
import Chart from "react-apexcharts";
import { currencyFormatUI } from "@/functions/helpers";
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
    tooltip: {
      enabled: true,
      y: {
        formatter: function (value) {
          return currencyFormatUI(value);
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return currencyFormatUI(value);
        },
      },
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
