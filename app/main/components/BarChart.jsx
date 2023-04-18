"use client";

import { useEffect } from "react";
import { Chart } from "chart.js/auto";
import style from "../main.module.css";
function BarChart() {
  useEffect(() => {
    var ctx = document.getElementById("myChart2").getContext("2d");
    var myChart2 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [250, 200, 260, 370, 400, 330],

            borderColor: "#009AAC",
            backgroundColor: "#009AAC",
            borderWidth: 2,
            borderRadius: 20,
            barThickness: 7,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, []);
  return (
    <>
      <div className="flex mx-auto my-auto">
        <div className="border border-gray-400 pt-0 rounded-xl h-fit my-auto  shadow-xl">
          <canvas
            id="myChart2"
            className={style["myChart2"]}
          ></canvas>
        </div>
      </div>
    </>
  );
}

export default BarChart;
