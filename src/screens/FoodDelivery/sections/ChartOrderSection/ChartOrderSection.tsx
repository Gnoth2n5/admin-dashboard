import { SaveIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ChartOrderSection = (): JSX.Element => {
  // Data for days of the week
  const daysOfWeek = [
    { id: 1, name: "Sunday", position: 0 },
    { id: 2, name: "Monday", position: 93 },
    { id: 3, name: "Tuesday", position: 189 },
    { id: 4, name: "Wednesday", position: 289 },
    { id: 5, name: "Thursday", position: 413 },
    { id: 6, name: "Friday", position: 517 },
    { id: 7, name: "Saturday", position: 600 },
  ];

  return (
    <div className="w-full max-w-[718px]">
      <Card className="w-full h-[327px] bg-white rounded-[14px] shadow-[0px_4px_4px_#0000000a] relative">
        <CardContent className="p-0">
          {/* Chart Title and Description */}
          <div className="pt-[27px] pl-[30px]">
            <h2 className="font-['Barlow',Helvetica] font-bold text-theme-colorgrey-body text-2xl">
              Chart Order
            </h2>
            <p className="w-[352px] mt-3 font-body-paragraph-lead text-theme-colorgrey-4 text-[length:var(--body-paragraph-lead-font-size)]">
              Lorem ipsum dolor sit amet, consectetur adip
            </p>
          </div>

          {/* SaveIcon Report Button */}
          <div className="absolute top-[35px] right-[30px]">
            <Button
              variant="outline"
              className="h-[47px] border border-solid border-[#2d9cdb] rounded-[14px]"
            >
              <SaveIcon className="w-6 h-6 mr-2" />
              <span className="font-['Cairo',Helvetica] font-bold text-theme-colorquantinery text-lg">
                SaveIcon Report
              </span>
            </Button>
          </div>

          {/* Chart Area */}
          <div className="mt-[70px] mx-[30px]">
            <div className="relative h-[168px]">
              {/* Chart Vector */}
              <img
                className="w-[625px] h-[136px] absolute top-[19px] left-[11px]"
                alt="Chart line"
                src="/vector-7-1.svg"
              />

              {/* Chart Data Point with Tooltip */}
              <div className="absolute w-[175px] h-[61px] top-0 left-[212px]">
                <div className="absolute w-[148px] h-[77px] -top-1 left-[35px] bg-[url(/background.svg)] bg-[100%_100%]">
                  <div className="relative w-[100px] h-[46px] top-2.5 left-[35px]">
                    <div className="relative w-[94px] h-[46px]">
                      <div className="w-8 top-0 left-0.5 font-['Cairo',Helvetica] font-bold text-theme-colorgrey-body text-base leading-[normal] absolute tracking-[0]">
                        456
                      </div>
                      <div className="absolute w-[46px] top-0 left-[34px] font-['Cairo',Helvetica] font-semibold text-theme-colorgrey-body text-base tracking-[0] leading-[normal]">
                        Order
                      </div>
                      <div className="absolute w-[94px] top-[25px] left-0 font-['Barlow',Helvetica] font-normal text-theme-colorgrey-4 text-sm tracking-[0] leading-[21px]">
                        Oct 18th, 2020
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute w-[31px] h-[31px] top-[30px] left-0 bg-theme-colorinfo rounded-[15.41px/15.5px] border-[6px] border-solid border-[#ffffff]" />
              </div>

              {/* Chart Background Line */}
              <img
                className="absolute w-[642px] h-[125px] top-4 left-[2px]"
                alt="Chart background"
                src="/vector-7.svg"
              />

              {/* Days of Week Labels */}
              <div className="absolute w-full h-[26px] bottom-0 left-0 flex">
                {daysOfWeek.map((day) => (
                  <div
                    key={day.id}
                    className="absolute font-body-paragraph text-theme-colorgrey-body text-[length:var(--body-paragraph-font-size)] tracking-[var(--body-paragraph-letter-spacing)] leading-[var(--body-paragraph-line-height)]"
                    style={{ left: `${day.position}px` }}
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
