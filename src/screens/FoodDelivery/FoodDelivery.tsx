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
      <div className="bg-theme-colorgrey-2 w-full relative flex flex-col lg:flex-row">
        {/* Side Menu Section */}
        <aside className="w-full lg:w-[240px] h-14 lg:h-screen bg-white fixed top-0 lg:left-0 z-20 shadow-sm">
          <div className="lg:sticky lg:top-0 lg:h-screen overflow-y-auto">
            <SideMenuSection />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full h-full pt-16 lg:pt-4 px-3 lg:px-6 lg:ml-[240px]">
          {/* Navigation Bar */}
          <div className="fixed top-14 left-0 right-0 lg:static bg-white lg:bg-transparent z-10 px-3 lg:px-0">
            <NavigationBarSection />
          </div>

          {/* Dashboard Stats */}
          <div className="mt-14 lg:mt-4 space-y-4">
            <DashboardStatsSection />

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-3">
              {statsData.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white rounded shadow-sm h-full"
                >
                  <CardContent className="p-2.5 h-full">
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-transparencyprimary rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="relative scale-75">
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
                      <div className="flex flex-col justify-center flex-1 min-w-0">
                        <div className="font-bold text-base md:text-lg lg:text-xl text-theme-colordark leading-none mb-1">
                          {stat.value}
                        </div>
                        <div className="font-body-paragraph-lead text-[10px] md:text-xs text-theme-colorgrey-body mb-1">
                          {stat.title}
                        </div>
                        <div className="flex items-center">
                          <div
                            className={`w-2 h-2 ${stat.trend === "up" ? "bg-transparent-color-success" : "bg-transparent-color-danger"} rounded-full -rotate-180 mr-1 flex-shrink-0`}
                          >
                            <img
                              className="w-0.5 h-0.5 m-auto mt-0.5 rotate-180"
                              alt="Icon"
                              src={
                                stat.trend === "up"
                                  ? "/icon-10.svg"
                                  : "/icon-14.svg"
                              }
                            />
                          </div>
                          <div className="font-body-paragraph-small text-[8px] md:text-[10px] text-theme-colorgrey-5 truncate">
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
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 md:gap-3">
              <div className="w-full">
                <PieChartSection />
              </div>
              <div className="w-full">
                <ChartOrderSection />
              </div>
            </div>

            {/* Revenue and Customer Map Row */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 md:gap-3">
              <div className="w-full">
                <TotalRevenueSection />
              </div>

              {/* Customer Map Card */}
              <div className="w-full">
                <Card className="bg-white rounded shadow-sm h-full">
                  <CardContent className="p-2.5 md:p-3">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-2">
                      <h2 className="font-bold text-xs md:text-sm lg:text-base text-theme-colorgrey-body">
                        Customer Map
                      </h2>

                      <div className="flex items-center space-x-1.5">
                        <Select defaultValue="weekly">
                          <SelectTrigger className="w-16 h-6 md:h-7 bg-white rounded border border-solid border-[#b9babd] text-[10px]">
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
                          className="w-6 h-6 md:w-7 md:h-7 bg-white rounded border border-solid border-[#ffffff]"
                        >
                          <div className="flex flex-col items-center justify-center space-y-0.5">
                            <div className="w-0.5 h-0.5 bg-theme-colorgrey-4 rounded-full"></div>
                            <div className="w-0.5 h-0.5 bg-theme-colorgrey-4 rounded-full"></div>
                            <div className="w-0.5 h-0.5 bg-theme-colorgrey-4 rounded-full"></div>
                          </div>
                        </Button>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="relative mt-2 md:mt-3">
                      <div className="flex justify-between h-28 md:h-32 lg:h-36 mb-2">
                        {/* Y-axis labels */}
                        <div className="flex flex-col justify-between pr-1 text-theme-colorgrey-5 font-heading-heading-5 text-[8px] md:text-[10px]">
                          <div>80</div>
                          <div>60</div>
                          <div>40</div>
                          <div>20</div>
                          <div>0</div>
                        </div>

                        {/* Chart bars */}
                        <div className="flex-1 relative">
                          {/* Horizontal grid lines */}
                          <div className="absolute w-full h-px top-0 bg-theme-colorgrey-2"></div>
                          <div className="absolute w-full h-px top-1/4 bg-theme-colorgrey-2"></div>
                          <div className="absolute w-full h-px top-2/4 bg-theme-colorgrey-2"></div>
                          <div className="absolute w-full h-px top-3/4 bg-theme-colorgrey-2"></div>
                          <div className="absolute w-full h-px top-full bg-theme-colorgrey-2"></div>

                          {/* Bars */}
                          <div className="flex justify-between h-full">
                            {customerMapData.map((item, index) => (
                              <div
                                key={index}
                                className="flex flex-col items-center justify-end h-full"
                              >
                                <div
                                  style={{height: `${(item.value/80) * 100}%`}}
                                  className={`w-0.5 md:w-1 ${index % 2 === 0 ? "bg-theme-colordanger" : "bg-theme-colorwarning"}`}
                                ></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* X-axis labels */}
                      <div className="flex justify-between text-theme-colorgrey-5 font-heading-heading-5 text-[8px] md:text-[10px]">
                        {customerMapData.map((item, index) => (
                          <div key={index}>{item.day}</div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Customer Review Section */}
            <div>
              <CustomerReviewSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
