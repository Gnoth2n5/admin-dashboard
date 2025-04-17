import { SearchIcon } from "lucide-react";
// import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";

export const NavigationBarSection = (): JSX.Element => {
  // Notification data for mapping
  const notifications = [
    {
      id: 1,
      count: 21,
      icon: "/icon-17.svg",
      bgColor: "bg-transparencyquantinery",
      badgeColor: "bg-theme-colorinfo",
    },
    {
      id: 2,
      count: 53,
      icon: "/icon-8.svg",
      bgColor: "bg-transparencyquantinery",
      badgeColor: "bg-theme-colorinfo",
    },
    {
      id: 3,
      count: 15,
      icon: "/icon-dashboard-1.svg",
      bgColor: "bg-[#5e6c9326]",
      badgeColor: "bg-theme-colormenu",
    },
    {
      id: 4,
      count: 19,
      icon: "/icon-dashboard.svg",
      bgColor: "bg-transparencydanger",
      badgeColor: "bg-theme-colordanger",
    },
  ];

  return (
    <nav className="flex w-full h-12 mt-4 gap-3 items-center justify-between">
      {/* SearchIcon bar */}
      <form className="flex-1 max-w-md">   
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon className="w-4 h-4 text-gray-500" />
            </div>
            <input 
              type="search" 
              className="block w-full h-10 ps-10 pe-3 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
              placeholder="Search..." 
            />
        </div>
      </form>
      <div className="flex items-center gap-3">
      {/* Vertical divider */}
      <div className="w-px h-8 bg-theme-colorgrey-3 rounded-lg" />

      {/* Notification icons */}
      <div className="flex h-12 gap-3">
        {notifications.map((notification) => (
          <div key={notification.id} className="relative h-10 w-10 cursor-pointer">
            <div
              className={`absolute w-10 h-10 top-0 left-0 ${notification.bgColor} hover:bg-theme-colorgrey-3 rounded-xl`}
            />
            <img
              className="absolute w-5 h-5 top-2.5 left-2.5 hover:scale-110 transition-all duration-300"
              alt="Notification icon"
              src={notification.icon}
            />
            <div className="absolute w-5 h-5 -top-1 -right-1">
              <div
                className={`relative w-5 h-5 ${notification.badgeColor} rounded-full border-2 border-solid border-[#f3f2f7] flex items-center justify-center`}
              >
                <div className="text-[10px] font-medium text-white">
                  {notification.count}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* User profile section */}
      <div className="flex items-center h-12 gap-3">
        <div className="font-medium text-sm text-theme-colordark">
          <span className="text-[#464154]">Hello, </span>
          <span>Samantha</span>
        </div>
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder-2.png" alt="User profile" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
      </div>
      </div>
    </nav>
  );
};
