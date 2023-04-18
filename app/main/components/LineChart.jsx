"use client";

import { useEffect } from "react";
import { Chart } from "chart.js/auto";
function LineChart() {
  useEffect(() => {
    var ctx = document.getElementById("myChart")?.getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan 2022",
          "Feb 2022",
          "Mar 2022",
          "Apr 2022",
          "May 2022",
          "Jun 2022",
          "Jul 2022",
          "Aug 2022",
          "Sep 2022",
          "Oct 2022",
          "Nov 2022",
          "Dec 2022",
        ],

        datasets: [
          {
            data: [
              20_000, 0, 20_000, 40_000, 40_000, 45_000, 79_800, 50_000, 60_000,
              67_000, 45_000, 60_000,
            ],
            label: "Applied",
            borderColor: "#56B0CB",
            backgroundColor: "#7bb6dd",

            fill: false,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, []);
  return (
    <>
      <div className="flex mx-auto my-auto  my-2">
        <div className="border border-gray-400 pt-0 rounded-xl  w-full my-auto  shadow-xl">
          <canvas
            id="myChart"
            style={{
              height: "350px",
            }}
          ></canvas>
        </div>
      </div>
    </>
  );
}

export default LineChart;
