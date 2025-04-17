import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { ChartOrderSection } from "./sections/ChartOrderSection";
import { CustomerReviewSection } from "./sections/CustomerReviewSection";
import { DashboardStatsSection } from "./sections/DashboardStatsSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { PieChartSection } from "./sections/PieChartSection";
import { SideMenuSection } from "./sections/SideMenuSection";
import { TotalRevenueSection } from "./sections/TotalRevenueSection";

export const FoodDelivery = (): JSX.Element => {
  // Stats data for the dashboard cards
  const statsData = [
    {
      title: "Total Orders",
      value: "75",
      change: "4% (30 days)",
      trend: "up",
      icon: "/group.png",
      bgIcon: "/group-1.png",
      iconClassName: "w-[39px] h-[43px]",
      bgIconClassName: "w-[39px] h-2.5",
    },
    {
      title: "Total Delivered",
      value: "357",
      change: "4% (30 days)",
      trend: "up",
      icon: "/group-13.png",
      bgIcon: "/group-14.png",
      iconClassName: "w-[47px] h-[19px]",
      bgIconClassName: "w-7 h-[11px]",
    },
    {
      title: "Total Canceled",
      value: "65",
      change: "25% (30 days)",
      trend: "down",
      icon: "/group-22.png",
      bgIcon: "/group-23.png",
      iconClassName: "w-[39px] h-[43px]",
      bgIconClassName: "w-[39px] h-2.5",
    },
    {
      title: "Total Revenue",
      value: "$128",
      change: "12% (30 days)",
      trend: "down",
      icon: "/group-34.png",
      bgIcon: "/group-35.png",
      iconClassName: "w-[15px] h-[11px]",
      bgIconClassName: "w-9 h-10",
    },
  ];

  // Customer map data
  const customerMapData = [
    { day: "Sun", value: 153 },
    { day: "Sun", value: 206 },
    { day: "Sun", value: 102 },
    { day: "Sun", value: 175 },
    { day: "Sun", value: 153 },
    { day: "Sun", value: 65 },
    { day: "Sun", value: 153 },
  ];

  return (
    <div className="bg-[#f3f2f7] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-theme-colorgrey-2 w-full relative flex">
        {/* Side Menu Section */}
        <aside className="w-[349px] min-h-screen bg-white fixed left-0 z-10 shadow-lg">
          <SideMenuSection />
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-[349px] p-8">
          {/* Navigation Bar */}
          <div className="mb-8">
            <NavigationBarSection />
          </div>

          {/* Dashboard Stats */}
          <div className="mb-8">
            <DashboardStatsSection />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
            {statsData.map((stat, index) => (
              <Card
                key={index}
                className="bg-white rounded-[14px] shadow-[0px_4px_4px_#0000000a] h-full"
              >
                <CardContent className="p-6 h-full">
                  <div className="flex items-start h-full">
                    <div className="w-[84px] h-[85px] bg-transparencyprimary rounded-[42.16px/42.5px] flex items-center justify-center mr-6 flex-shrink-0">
                      <div className="relative">
                        <img
                          className={`${stat.iconClassName}`}
                          alt="Icon"
                          src={stat.icon}
                        />
                        <img
                          className={`${stat.bgIconClassName}`}
                          alt="Background"
                          src={stat.bgIcon}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="font-bold text-[46px] text-theme-colordark leading-none mb-2">
                        {stat.value}
                      </div>
                      <div className="font-body-paragraph-lead text-theme-colorgrey-body mb-2">
                        {stat.title}
                      </div>
                      <div className="flex items-center">
                        <div
                          className={`w-4 h-4 ${stat.trend === "up" ? "bg-transparent-color-success" : "bg-transparent-color-danger"} rounded-3xl -rotate-180 mr-2 flex-shrink-0`}
                        >
                          <img
                            className="w-1.5 h-1.5 m-auto mt-[5px] rotate-180"
                            alt="Icon"
                            src={
                              stat.trend === "up"
                                ? "/icon-10.svg"
                                : "/icon-14.svg"
                            }
                          />
                        </div>
                        <div className="font-body-paragraph-small text-theme-colorgrey-5">
                          {stat.change}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            <div className="w-full h-full">
              <PieChartSection />
            </div>
            <div className="w-full h-full">
              <ChartOrderSection />
            </div>
          </div>

          {/* Revenue and Customer Map Row */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            <div className="w-full h-full">
              <TotalRevenueSection />
            </div>

            {/* Customer Map Card */}
            <Card className="bg-white rounded-[14px] shadow-[0px_4px_4px_#0000000a] h-full">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-bold text-2xl text-theme-colorgrey-body">
                    Customer Map
                  </h2>

                  <div className="flex items-center space-x-4">
                    <Select defaultValue="weekly">
                      <SelectTrigger className="w-[110px] h-[38px] bg-white rounded-xl border border-solid border-[#b9babd]">
                        <SelectValue placeholder="Weekly" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button
                      variant="outline"
                      size="icon"
                      className="w-[38px] h-[38px] bg-white rounded-xl border border-solid border-[#ffffff]"
                    >
                      <div className="flex flex-col items-center justify-center gap-2">
                        <div className="w-[5px] h-[5px] bg-theme-colorgrey-4 rounded-[2.5px]"></div>
                        <div className="w-[5px] h-[5px] bg-theme-colorgrey-4 rounded-[2.5px]"></div>
                        <div className="w-[5px] h-[5px] bg-theme-colorgrey-4 rounded-[2.5px]"></div>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Chart */}
                <div className="relative mt-6">
                  <div className="flex justify-between h-[229px] mb-4">
                    {/* Y-axis labels */}
                    <div className="flex flex-col justify-between pr-2 text-theme-colorgrey-5 font-heading-heading-5">
                      <div>80</div>
                      <div>60</div>
                      <div>40</div>
                      <div>20</div>
                      <div>0</div>
                    </div>

                    {/* Chart bars */}
                    <div className="flex-1 relative">
                      {/* Horizontal grid lines */}
                      <div className="absolute w-full h-px top-0 bg-theme-colorgrey-2 rounded-[20px]"></div>
                      <div className="absolute w-full h-px top-[52px] bg-theme-colorgrey-2 rounded-[20px]"></div>
                      <div className="absolute w-full h-px top-[103px] bg-theme-colorgrey-2 rounded-[20px]"></div>
                      <div className="absolute w-full h-px top-[154px] bg-theme-colorgrey-2 rounded-[20px]"></div>
                      <div className="absolute w-full h-px top-[205px] bg-theme-colorgrey-2 rounded-[20px]"></div>

                      {/* Bars */}
                      <div className="flex justify-between h-full">
                        {customerMapData.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center justify-end h-full"
                          >
                            <div
                              className={`w-[13px] h-[${item.value}px] ${index % 2 === 0 ? "bg-theme-colordanger" : "bg-theme-colorwarning"}`}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* X-axis labels */}
                  <div className="flex justify-between text-theme-colorgrey-5 font-heading-heading-5">
                    {customerMapData.map((item, index) => (
                      <div key={index}>{item.day}</div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customer Review Section */}
          <div className="mb-8">
            <CustomerReviewSection />
          </div>
        </main>
      </div>
    </div>
  );
};
