import {
  BarChart2Icon,
  CalendarIcon,
  ClipboardListIcon,
  CoffeeIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  StarIcon,
  UserIcon,
  UsersIcon,
  UtensilsIcon,
  WalletIcon,
} from "lucide-react";
import React from "react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SideMenuSection = (): JSX.Element => {
  // Navigation menu items data
  const menuItems = [
    {
      icon: <LayoutDashboardIcon className="w-4 h-4" />,
      label: "Dashboard",
      active: true,
    },
    { icon: <ClipboardListIcon className="w-4 h-4" />, label: "Order List" },
    { icon: <FileTextIcon className="w-4 h-4" />, label: "Order Detail" },
    { icon: <UsersIcon className="w-4 h-4" />, label: "Customer" },
    { icon: <BarChart2Icon className="w-4 h-4" />, label: "Analytics" },
    { icon: <StarIcon className="w-4 h-4" />, label: "Reviews" },
    { icon: <CoffeeIcon className="w-4 h-4" />, label: "Foods" },
    { icon: <UtensilsIcon className="w-4 h-4" />, label: "Food Detail" },
    { icon: <UserIcon className="w-4 h-4" />, label: "Customer Detail" },
    { icon: <CalendarIcon className="w-4 h-4" />, label: "Calendar" },
    { icon: <MessageSquareIcon className="w-4 h-4" />, label: "Chat" },
    { icon: <WalletIcon className="w-4 h-4" />, label: "Wallet" },
  ];

  return (
    <aside className="w-full h-full bg-white">
      <div className="h-full relative">
        {/* Logo and Brand */}
        <div className="px-6 pt-6 pb-4">
          <div className="font-['Poppins',Helvetica] font-bold text-2xl">
            <span className="text-[#333333]">Sedap</span>
            <span className="text-theme-colorsuccess">.</span>
          </div>
          <div className="font-heading-heading-4 text-theme-colorgrey-4 mt-1 text-sm">
            Modern Admin Dashboard
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {item.active && (
                <div className="absolute w-1 h-8 top-[2px] left-0 bg-theme-colorsuccess rounded-[58px]" />
              )}
              <div
                className={`flex items-center gap-4 py-0.5 px-6 h-10 ${
                  item.active ? "bg-transparencysuccess rounded-lg" : ""
                }`}
              >
                {item.icon}
                <div
                  className={`font-heading-heading-4 text-sm ${
                    item.active
                      ? "font-bold text-theme-colorprimary"
                      : "text-theme-colordark"
                  }`}
                >
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* Add Menu Card */}
        <Card className="mx-4 mt-6 bg-theme-colorsuccess text-white">
          <CardContent className="p-3">
            <p className="text-xs mb-2">
              Please organize your menus through button below:
            </p>
            <Button
              variant="outline"
              className="bg-white text-theme-colorsuccess hover:bg-white/90 w-full text-xs h-8"
            >
              + Add Menus
            </Button>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
};
