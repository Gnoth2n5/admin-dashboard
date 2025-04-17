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
      icon: <LayoutDashboardIcon className="w-5 h-5" />,
      label: "Dashboard",
      active: true,
    },
    { icon: <ClipboardListIcon className="w-5 h-5" />, label: "Order List" },
    { icon: <FileTextIcon className="w-5 h-5" />, label: "Order Detail" },
    { icon: <UsersIcon className="w-5 h-5" />, label: "Customer" },
    { icon: <BarChart2Icon className="w-5 h-5" />, label: "Analytics" },
    { icon: <StarIcon className="w-5 h-5" />, label: "Reviews" },
    { icon: <CoffeeIcon className="w-5 h-5" />, label: "Foods" },
    { icon: <UtensilsIcon className="w-5 h-5" />, label: "Food Detail" },
    { icon: <UserIcon className="w-5 h-5" />, label: "Customer Detail" },
    { icon: <CalendarIcon className="w-5 h-5" />, label: "Calendar" },
    { icon: <MessageSquareIcon className="w-5 h-5" />, label: "Chat" },
    { icon: <WalletIcon className="w-5 h-5" />, label: "Wallet" },
  ];

  return (
    <aside className="w-[349px] h-full bg-white">
      <div className="h-full relative">
        {/* Logo and Brand */}
        <div className="px-[53px] pt-[41px] pb-6">
          <div className="font-['Poppins',Helvetica] font-bold text-5xl">
            <span className="text-[#333333]">Sedap</span>
            <span className="text-theme-colorsuccess">.</span>
          </div>
          <div className="font-heading-heading-4 text-theme-colorgrey-4 mt-2">
            Modern Admin Dashboard
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-[50px]">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {item.active && (
                <div className="absolute w-2 h-11 top-[5px] left-0 bg-theme-colorsuccess rounded-[58px]" />
              )}
              <div
                className={`flex items-center gap-6 py-0.5 px-[71px] h-14 ${
                  item.active ? "bg-transparencysuccess rounded-lg" : ""
                }`}
              >
                {item.icon}
                <div
                  className={`font-heading-heading-4 text-[length:var(--heading-heading-4-font-size)] ${
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

        {/* Add Menu Card - This would be at the bottom in a real implementation */}
        <Card className="mt-10 mx-6 bg-theme-colorsuccess text-white">
          <CardContent className="p-4">
            <p className="text-sm mb-2">
              Please organize your menus through button below:
            </p>
            <Button
              variant="outline"
              className="bg-white text-theme-colorsuccess hover:bg-white/90 w-full"
            >
              + Add Menus
            </Button>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
};
