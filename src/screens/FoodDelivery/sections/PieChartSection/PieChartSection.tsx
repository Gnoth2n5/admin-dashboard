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
      imageClassName: "w-[75px] h-[74px] left-[76px] absolute top-0",
    },
    {
      id: 3,
      title: "Total Revenue",
      percentage: "62%",
      imageSrc: "/circle.svg",
      backgroundImageSrc: "/circle-2.svg",
      imageClassName: "w-[130px] h-[153px] left-[23px] absolute top-0",
    },
  ];

  return (
    <Card className="w-full relative bg-[url(/background-1.svg)] bg-[100%_100%]">
      <CardContent className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-bold text-2xl text-theme-colorgrey-body">
            Pie Chart
          </h2>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Checkbox id="chart" className="w-6 h-6 rounded-sm" />
              <label
                htmlFor="chart"
                className="font-semibold text-lg text-theme-colorgrey-body cursor-pointer"
              >
                Chart
              </label>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                id="showValue"
                className="w-6 h-6 rounded-sm"
                defaultChecked
              />
              <label
                htmlFor="showValue"
                className="font-semibold text-lg text-theme-colorgrey-body cursor-pointer"
              >
                Show Value
              </label>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="w-[38px] h-[38px] rounded-xl border-white"
            >
              <MoreVerticalIcon className="h-6 w-6 text-theme-colorgrey-5" />
            </Button>
          </div>
        </div>

        <div className="flex justify-between">
          {chartData.map((chart) => (
            <div key={chart.id} className="flex flex-col items-center">
              <div
                className="relative w-[153px] h-[153px] bg-[100%_100%]"
                style={{ backgroundImage: `url(${chart.backgroundImageSrc})` }}
              >
                <img
                  className={
                    chart.imageClassName ||
                    "absolute w-[153px] h-[153px] top-0 left-0"
                  }
                  alt="Circle"
                  src={chart.imageSrc}
                />
                <div className="absolute w-[82px] h-[82px] top-[35px] left-[35px] bg-[#ffffff] rounded-[41.14px] shadow-[0px_17px_35px_#0000001f]" />
                <div className="absolute top-16 left-[59px] font-semibold text-xl text-black whitespace-nowrap">
                  {chart.percentage}
                </div>
              </div>
              <p className="mt-6 font-semibold text-lg text-center text-theme-colorgrey-body">
                {chart.title}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
