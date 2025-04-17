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
    <Card className="w-full h-[430px] shadow-[0px_4px_4px_#0000000a] rounded-[14px]">
      <CardContent className="p-9">
        <div className="relative w-full h-[359px]">
          <div className="w-full h-[359px]">
            <div className="w-full h-[307px] relative mt-[52px]">
              <div className="relative h-[307px]">
                {/* Y-axis values */}
                <div className="flex-col top-0 left-0 inline-flex items-start gap-10 absolute">
                  {yAxisValues.map((value, index) => (
                    <div
                      key={index}
                      className="relative w-fit font-heading-heading-5 font-[number:var(--heading-heading-5-font-weight)] text-theme-colorgrey-5 text-[length:var(--heading-heading-5-font-size)] tracking-[var(--heading-heading-5-letter-spacing)] leading-[var(--heading-heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-heading-5-font-style)]"
                    >
                      {value}
                    </div>
                  ))}
                </div>

                {/* X-axis months */}
                <div className="top-[248px] left-[88px] inline-flex items-start gap-10 absolute">
                  {months.map((month, index) => (
                    <div key={index} className="relative w-[27px] h-[41px]">
                      <div className="absolute top-[17px] left-0 font-heading-heading-5 font-[number:var(--heading-heading-5-font-weight)] text-theme-colorgrey-5 text-[length:var(--heading-heading-5-font-size)] tracking-[var(--heading-heading-5-letter-spacing)] leading-[var(--heading-heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-heading-5-font-style)]">
                        {month}
                      </div>
                      <div
                        className={`w-[9px] h-[9px] top-0 rounded-[4.5px] absolute left-2.5 ${
                          highlightedMonths[month]
                            ? `bg-${highlightedMonths[month].color}`
                            : "border-2 border-solid border-[#b9babd]"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart images */}
              <img
                className="absolute w-[716px] h-[217px] top-[18px] left-[103px]"
                alt="Chart background"
                src="/group-169.png"
              />

              <img
                className="absolute w-[720px] h-[180px] top-[43px] left-[101px]"
                alt="Blue line chart"
                src="/vector-14.svg"
              />

              {/* Blue highlight dot */}
              <div className="absolute w-[18px] h-[18px] top-9 left-[421px] bg-theme-colorinfo rounded-[9px] border-[3px] border-solid border-[#ffffff]" />

              {/* Blue tooltip */}
              <div className="absolute w-[87px] h-[22px] top-0 left-[388px]">
                <div className="relative w-[85px] h-[22px] bg-transparencyquantinery">
                  <div className="text-theme-colorquantinery absolute top-0 left-3 [font-family:'Barlow',Helvetica] font-semibold text-xs tracking-[0] leading-[21px] whitespace-nowrap">
                    $ 38.753,00
                  </div>
                </div>
              </div>

              <img
                className="absolute w-[714px] h-[168px] top-[51px] left-[105px]"
                alt="Red line chart"
                src="/vector-15.svg"
              />

              <img
                className="absolute w-px h-[220px] top-[18px] left-[690px]"
                alt="Vertical line"
                src="/vector-12.svg"
              />
            </div>

            {/* Chart header */}
            <div className="w-full h-[29px] flex justify-between items-center">
              <div className="font-bold text-2xl [font-family:'Barlow',Helvetica] text-theme-colorgrey-body tracking-[0] leading-[normal]">
                Total Revenue
              </div>

              <div className="flex items-center gap-4">
                {/* Legend for 2020 */}
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-theme-colorquantinery rounded-lg" />
                  <div className="font-heading-heading-6 font-[number:var(--heading-heading-6-font-weight)] text-theme-colorgrey-5 text-[length:var(--heading-heading-6-font-size)] leading-[var(--heading-heading-6-line-height)] whitespace-nowrap tracking-[var(--heading-heading-6-letter-spacing)] [font-style:var(--heading-heading-6-font-style)]">
                    2020
                  </div>
                </div>

                {/* Legend for 2021 */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-theme-colordanger rounded-lg" />
                  <div className="font-heading-heading-6 font-[number:var(--heading-heading-6-font-weight)] text-theme-colorgrey-5 text-[length:var(--heading-heading-6-font-size)] leading-[var(--heading-heading-6-line-height)] whitespace-nowrap tracking-[var(--heading-heading-6-letter-spacing)] [font-style:var(--heading-heading-6-font-style)]">
                    2021
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Red tooltip */}
          <div className="absolute w-[87px] h-[22px] top-[219px] left-[707px]">
            <div className="relative w-[85px] h-[22px] bg-transparencydanger">
              <div className="text-theme-colordanger absolute top-0 left-3 [font-family:'Barlow',Helvetica] font-semibold text-xs tracking-[0] leading-[21px] whitespace-nowrap">
                $ 12.657,00
              </div>
            </div>
          </div>

          {/* Red highlight dot */}
          <div className="absolute w-[18px] h-[18px] top-[221px] left-[686px] bg-theme-colordanger rounded-[9px] border-[3px] border-solid border-[#ffffff]" />
        </div>
      </CardContent>
    </Card>
  );
};
