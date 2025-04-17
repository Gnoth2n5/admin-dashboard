import { MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";

export const PieChartSection = (): JSX.Element => {
  // Chart data for the three pie charts
  const chartData = [
    {
      id: 1,
      title: "Total Order",
      percentage: "81%",
      imageSrc: "/circle-4.svg",
      backgroundImageSrc: "/circle-2.svg",
    },
    {
      id: 2,
      title: "Customer Growth",
      percentage: "22%",
      imageSrc: "/circle-1.svg",
      backgroundImageSrc: "/circle-2.svg",
      imageClassName: "w-[75px] h-[74px] left-1/2 -translate-x-1/2 absolute top-0",
    },
    {
      id: 3,
      title: "Total Revenue",
      percentage: "62%",
      imageSrc: "/circle.svg",
      backgroundImageSrc: "/circle-2.svg",
      imageClassName: "w-[130px] h-[153px] left-1/2 -translate-x-1/2 absolute top-0",
    },
  ];

  return (
    <Card className="w-full relative bg-[url(/background-1.svg)] bg-cover bg-center">
      <CardContent className="p-2 lg:p-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 lg:gap-4 mb-4">
          <h2 className="font-bold text-base lg:text-xl text-theme-colorgrey-body">
            Pie Chart
          </h2>

          <div className="flex flex-wrap items-center gap-2 lg:gap-4">
            <div className="flex items-center gap-2">
              <Checkbox id="chart" className="w-4 h-4 lg:w-5 lg:h-5 rounded-sm" />
              <label
                htmlFor="chart"
                className="font-semibold text-sm lg:text-base text-theme-colorgrey-body cursor-pointer whitespace-nowrap"
              >
                Chart
              </label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="showValue"
                className="w-4 h-4 lg:w-5 lg:h-5 rounded-sm"
                defaultChecked
              />
              <label
                htmlFor="showValue"
                className="font-semibold text-sm lg:text-base text-theme-colorgrey-body cursor-pointer whitespace-nowrap"
              >
                Show Value
              </label>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl border-white"
            >
              <MoreVerticalIcon className="h-4 w-4 lg:h-5 lg:w-5 text-theme-colorgrey-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {chartData.map((chart) => (
            <div key={chart.id} className="flex flex-col items-center">
              <div
                className="relative w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] bg-cover bg-center"
                style={{ backgroundImage: `url(${chart.backgroundImageSrc})` }}
              >
                <img
                  className={
                    chart.imageClassName ||
                    "absolute w-full h-full top-0 left-1/2 -translate-x-1/2"
                  }
                  alt="Circle"
                  src={chart.imageSrc}
                />
                <div className="absolute w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-[0px_17px_35px_#0000001f] flex items-center justify-center">
                  <div className="font-semibold text-base lg:text-lg text-black">
                    {chart.percentage}
                  </div>
                </div>
              </div>
              <p className="mt-3 font-semibold text-sm lg:text-base text-center text-theme-colorgrey-body">
                {chart.title}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
