// @ts-nocheck
"use client";
import Chart from "react-apexcharts";

const ChartPieDash = ({ value }) => {
  const options = {
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
          size: "75%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
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
            show: false,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            formatter: function (val: any) {
              return parseInt(val) + "%";
            },
            color: "#111",
            fontSize: "20px",
            show: true,
            offsetY: 6,
            fontWeight: "bold",
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

  return (
    <>
      <Chart options={options} height={180} series={value} type="radialBar" />
    </>
  );
};

export default ChartPieDash;
