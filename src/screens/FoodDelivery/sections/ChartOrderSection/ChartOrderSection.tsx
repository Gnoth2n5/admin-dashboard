import { SaveIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ChartOrderSection = (): JSX.Element => {
  // Data for days of the week
  const daysOfWeek = [
    { id: 1, name: "Sunday", position: 0 },
    { id: 2, name: "Monday", position: 15 },
    { id: 3, name: "Tuesday", position: 30 },
    { id: 4, name: "Wednesday", position: 45 },
    { id: 5, name: "Thursday", position: 60 },
    { id: 6, name: "Friday", position: 75 },
    { id: 7, name: "Saturday", position: 90 },
  ];

  return (
    <div className="w-full">
      <Card className="w-full bg-white rounded-[14px] shadow-[0px_4px_4px_#0000000a]">
        <CardContent className="p-4 md:p-6 lg:p-8">
          {/* Chart Title and Description */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="font-bold text-xl md:text-2xl text-theme-colorgrey-body">
                Chart Order
              </h2>
              <p className="mt-2 md:mt-3 font-body-paragraph-lead text-theme-colorgrey-4 text-sm md:text-base max-w-[352px]">
                Lorem ipsum dolor sit amet, consectetur adip
              </p>
            </div>

            <Button
              variant="outline"
              className="h-10 md:h-[47px] border border-solid border-[#2d9cdb] rounded-[14px] whitespace-nowrap"
            >
              <SaveIcon className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              <span className="font-bold text-base md:text-lg text-theme-colorquantinery">
                Save Report
              </span>
            </Button>
          </div>

          {/* Chart Area */}
          <div className="mt-8 md:mt-[70px] relative">
            <div className="relative h-[168px] w-full overflow-hidden">
              {/* Chart Vector */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  className="w-full max-w-[625px] h-auto"
                  alt="Chart line"
                  src="/vector-7-1.svg"
                />
              </div>

              {/* Chart Data Point with Tooltip */}
              <div className="absolute w-[175px] h-[61px] top-0 left-1/2 -translate-x-1/2">
                <div className="absolute w-[148px] h-[77px] -top-1 left-[35px] bg-[url(/background.svg)] bg-cover bg-center">
                  <div className="relative w-[100px] h-[46px] top-2.5 left-[35px]">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-theme-colorgrey-body">456</span>
                        <span className="font-semibold text-base text-theme-colorgrey-body">Order</span>
                      </div>
                      <div className="font-normal text-sm text-theme-colorgrey-4">
                        Oct 18th, 2020
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute w-[31px] h-[31px] top-[30px] left-0 bg-theme-colorinfo rounded-full border-[6px] border-solid border-white" />
              </div>

              {/* Chart Background Line */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  className="w-full max-w-[642px] h-auto opacity-50"
                  alt="Chart background"
                  src="/vector-7.svg"
                />
              </div>

              {/* Days of Week Labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
                {daysOfWeek.map((day) => (
                  <div
                    key={day.id}
                    className="text-sm md:text-base text-theme-colorgrey-body"
                  >
                    {day.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
