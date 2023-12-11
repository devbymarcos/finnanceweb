// @ts-nocheck
"use client";
import Chart from "react-apexcharts";

const ChartAreaDash = () => {
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
      categories: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
      ],
    },
  };

  let series = [
    {
      name: "Resultado",
      data: [100, 200.5, 190.0, 520, 42, 109, 100],
    },
  ];

  return (
    <>
      <Chart options={options} height={350} series={series} type="area" />
    </>
  );
};

export default ChartAreaDash;
