import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TotalRevenueSection = (): JSX.Element => {
  // Data for months
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Des",
  ];

  // Data for y-axis values
  const yAxisValues = ["$40k", "$30k", "$20k", "$10k"];

  // Data for highlighted months and their values
  const highlightedMonths = {
    Jun: { year: 2020, value: "$ 38.753,00", color: "theme-colorinfo" },
    Oct: { year: 2021, value: "$ 12.657,00", color: "theme-colordanger" },
  };

  return (
    <Card className="w-full shadow-[0px_4px_4px_#0000000a] rounded-[14px]">
      <CardContent className="p-4 md:p-6 lg:p-8">
        <div className="w-full h-full">
          {/* Chart header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="font-bold text-xl md:text-2xl text-theme-colorgrey-body">
              Total Revenue
            </div>

            <div className="flex items-center gap-4">
              {/* Legend for 2020 */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-theme-colorquantinery rounded-lg" />
                <div className="text-sm md:text-base text-theme-colorgrey-5">
                  2020
                </div>
              </div>

              {/* Legend for 2021 */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-theme-colordanger rounded-lg" />
                <div className="text-sm md:text-base text-theme-colorgrey-5">
                  2021
                </div>
              </div>
            </div>
          </div>

          {/* Chart container */}
          <div className="relative w-full aspect-[16/9] min-h-[300px] overflow-hidden">
            <div className="absolute inset-0">
              {/* Y-axis values */}
              <div className="absolute left-0 top-0 bottom-[52px] flex flex-col justify-between">
                {yAxisValues.map((value, index) => (
                  <div
                    key={index}
                    className="text-xs md:text-sm text-theme-colorgrey-5"
                  >
                    {value}
                  </div>
                ))}
              </div>

              {/* X-axis months */}
              <div className="absolute left-[88px] right-0 bottom-0 flex justify-between">
                {months.map((month, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-2 h-2 md:w-[9px] md:h-[9px] rounded-full mb-2 ${
                        highlightedMonths[month]
                          ? `bg-${highlightedMonths[month].color}`
                          : "border-2 border-solid border-[#b9babd]"
                      }`}
                    />
                    <div className="text-xs md:text-sm text-theme-colorgrey-5">
                      {month}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart content */}
              <div className="absolute left-[88px] right-0 top-[18px] bottom-[52px]">
                {/* Chart background */}
                <div className="relative w-full h-full">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Chart background"
                    src="/group-169.png"
                  />

                  <img
                    className="absolute inset-0 w-full h-full object-contain"
                    alt="Blue line chart"
                    src="/vector-14.svg"
                  />

                  <img
                    className="absolute inset-0 w-full h-full object-contain"
                    alt="Red line chart"
                    src="/vector-15.svg"
                  />

                  {/* Blue highlight dot and tooltip */}
                  <div className="absolute top-[9px] left-[38%]">
                    <div className="relative">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-transparencyquantinery px-3 py-1 rounded">
                        <span className="text-xs text-theme-colorquantinery">
                          $ 38.753,00
                        </span>
                      </div>
                      <div className="w-[18px] h-[18px] bg-theme-colorinfo rounded-full border-[3px] border-solid border-white" />
                    </div>
                  </div>

                  {/* Red highlight dot and tooltip */}
                  <div className="absolute top-[221px] right-[5%]">
                    <div className="relative">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-transparencydanger px-3 py-1 rounded">
                        <span className="text-xs text-theme-colordanger">
                          $ 12.657,00
                        </span>
                      </div>
                      <div className="w-[18px] h-[18px] bg-theme-colordanger rounded-full border-[3px] border-solid border-white" />
                    </div>
                  </div>

                  {/* Vertical line */}
                  <div className="absolute top-0 right-[5%] w-px h-full bg-[#E3E3E3]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
