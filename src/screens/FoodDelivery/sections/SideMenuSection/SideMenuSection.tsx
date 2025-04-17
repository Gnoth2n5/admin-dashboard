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

export const SideMenuSection = (): JSX.Element => {
  const menuItems = [
    { icon: <LayoutDashboardIcon className="w-4 h-4" />, label: "Dashboard" },
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

  const [activeIndex, setActiveIndex] = React.useState(0); // mặc định là Dashboard

  return (
    <aside className="w-full h-full bg-white">
      <div className="h-full relative">
        {/* Logo and Brand */}
        <div className="px-6 pt-6 pb-4">
          <div className="font-['Poppins',Helvetica] font-bold text-2xl">
            <span className="text-gray-600">Sedap</span>
            <span className="text-theme-colorsuccess">.</span>
          </div>
          <div className="font-heading-heading-4 text-theme-colorgrey-4 mt-1 text-sm">
            Modern Admin Dashboard
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6">
          {menuItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={index} className="relative">
                {isActive && (
                  <div className="absolute w-1 h-8 top-[2px] left-0 bg-theme-colorsuccess rounded-md" />
                )}
                <div
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-4 py-0.5 px-6 h-10 ${
                    isActive ? "bg-transparencysuccess rounded-lg" : ""
                  } hover:bg-theme-colorgrey-2 rounded-lg transition-all duration-300 cursor-pointer`}
                >
                  {item.icon}
                  <div
                    className={`font-heading-heading-4 text-sm ${
                      isActive
                        ? "font-bold text-theme-colorprimary"
                        : "text-theme-colordark"
                    }`}
                  >
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
