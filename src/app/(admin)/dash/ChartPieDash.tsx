// @ts-nocheck
"use client";
import Chart from "react-apexcharts";

const ChartPieDash = ({ value }) => {
  let options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          //@ts-ignore
          position: "front",
          dropShadow: {
            enabled: false,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            formatter: function (val: any) {
              return parseInt(val);
            },
            color: "#111",
            fontSize: "35px",
            show: true,
            offsetY: -6,
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: ["#f3b43f"], // Cor sólida
    },
    stroke: {
      lineCap: "round",
    },
    labels: [""],
  };

  const series = [value];
  return (
    <>
      <Chart options={options} height={200} series={series} type="radialBar" />
    </>
  );
};

export default ChartPieDash;
