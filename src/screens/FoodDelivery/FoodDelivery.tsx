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
    <div className="bg-[#f3f2f7] min-h-screen">
      <div className="bg-theme-colorgrey-2 flex flex-col lg:flex-row min-h-screen">
        {/* Side Menu Section */}
        <aside className="w-full lg:w-[280px] h-14 lg:h-screen bg-white fixed top-0 lg:left-0 z-20 shadow-sm">
          <div className="lg:sticky lg:top-0 lg:h-screen overflow-y-auto">
            <SideMenuSection />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full h-full pt-14 lg:pt-2 px-2 lg:px-4 lg:ml-[280px] overflow-x-hidden">
          {/* Navigation Bar */}
          <div className="fixed top-14 left-0 right-0 lg:static bg-white lg:bg-transparent z-10 px-2 lg:px-0">
            <NavigationBarSection />
          </div>

          {/* Dashboard Stats */}
          <div className="mt-12 lg:mt-2 space-y-3 pb-3">
            <DashboardStatsSection />

          </div>
        </main>
      </div>
    </div>
  );
};
