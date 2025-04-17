import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DashboardStatsSection = (): JSX.Element => {
  return (
    <div className="w-full py-6 px-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-heading-heading-1 text-theme-colordark text-[length:var(--heading-heading-1-font-size)] font-[number:var(--heading-heading-1-font-weight)] tracking-[var(--heading-heading-1-letter-spacing)] leading-[var(--heading-heading-1-line-height)] [font-style:var(--heading-heading-1-font-style)]">
            Dashboard
          </h1>
          <p className="mt-2 font-heading-heading-4 text-theme-colorgrey-5 text-[length:var(--heading-heading-4-font-size)] font-[number:var(--heading-heading-4-font-weight)] tracking-[var(--heading-heading-4-letter-spacing)] leading-[var(--heading-heading-4-line-height)] [font-style:var(--heading-heading-4-font-style)]">
            Hi, Samantha. Welcome back&nbsp;&nbsp;to Sedap Admin!
          </p>
        </div>

        <Card className="shadow-[0px_4px_4px_#0000000a] rounded-xl">
          <CardContent className="flex items-center p-3 gap-3">
            <div className="w-12 h-12 bg-transparencyquantinery rounded-[15px] flex items-center justify-center">
              <CalendarIcon className="w-[34px] h-[34px] text-theme-colorquantinery" />
            </div>

            <div>
              <h4 className="font-heading-heading-4 text-[#3e4954] text-[length:var(--heading-heading-4-font-size)] font-[number:var(--heading-heading-4-font-weight)] tracking-[var(--heading-heading-4-letter-spacing)] leading-[var(--heading-heading-4-line-height)] [font-style:var(--heading-heading-4-font-style)]">
                Filter Periode
              </h4>
              <p className="font-body-paragraph-small text-[#3e4954] text-[length:var(--body-paragraph-small-font-size)] font-[number:var(--body-paragraph-small-font-weight)] tracking-[var(--body-paragraph-small-letter-spacing)] leading-[var(--body-paragraph-small-line-height)] [font-style:var(--body-paragraph-small-font-style)]">
                17 April 2020 - 21 May 2020
              </p>
            </div>

            <ChevronDownIcon className="w-6 h-6 text-[#3e4954] ml-auto" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
