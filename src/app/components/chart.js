"use client"

import ReactEcharts from "echarts-for-react";

export default function Chart({ option }) {
  return (
    <ReactEcharts
      id="echart"
      style={{
        height: "100%",
        width: "100%",
      }}
      option={option}
    />
  );
}
