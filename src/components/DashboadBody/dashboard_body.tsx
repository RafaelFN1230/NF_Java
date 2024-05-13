"use client";

import * as React from "react";
import CardComponent from "./Card/card";
import PieChartcomponent from "./Tables/donut_chart";
import MainChart from "./Tables/main_chart";

export default function DashboadBody() {
  const data = [{ comCandidato: 50, semCandidato: 3 }];
  return (
    <>
      <div className="flex flex-col-reverse">
        <div className="h-1/2">
          <MainChart />
        </div>
        <div className="h-1/2 flex flex-row mt-5">
          <div className="w-1/2">
            <PieChartcomponent />
          </div>
          <div className="w-1/2">
            <CardComponent />
          </div>
        </div>
      </div>
    </>
  );
}
