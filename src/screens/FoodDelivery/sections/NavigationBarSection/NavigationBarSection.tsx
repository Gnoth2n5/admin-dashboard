import { SearchIcon } from "lucide-react";
import React from "react";
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
    <nav className="flex w-full h-14 mt-10 gap-4">
      {/* SearchIcon bar */}
      <div className="flex-grow h-full bg-[#fcfcfc] rounded-lg border border-solid border-[#ebebeb]">
        <div className="relative flex items-center h-full px-7">
          <div className="relative flex items-center">
            <div className="absolute w-0.5 h-[26px] bg-theme-colorinfo" />
            <span className="pl-2 font-body-paragraph-lead text-[#969ba0] text-[length:var(--body-paragraph-lead-font-size)] tracking-[var(--body-paragraph-lead-letter-spacing)] leading-[var(--body-paragraph-lead-line-height)]">
              SearchIcon here
            </span>
          </div>
          <div className="ml-auto">
            <SearchIcon className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Vertical divider */}
      <div className="w-px h-14 bg-theme-colorgrey-3 rounded-lg" />

      {/* Notification icons */}
      <div className="flex h-14 gap-5">
        {notifications.map((notification) => (
          <div key={notification.id} className="relative h-14 w-14">
            <div
              className={`absolute w-12 h-12 top-1.5 left-0 ${notification.bgColor} rounded-[15px]`}
            />
            <img
              className="absolute w-7 h-7 top-4 left-2.5"
              alt="Notification icon"
              src={notification.icon}
            />
            <div className="absolute w-[21px] h-[19px] top-0 left-[35px]">
              <div
                className={`relative w-[25px] h-[25px] top-[-3px] left-[-3px] ${notification.badgeColor} rounded-[48px] border-[3px] border-solid border-[#f3f2f7]`}
              >
                <div className="absolute w-[13px] h-[17px] top-px left-[3px] font-body-paragraph-small font-[number:var(--body-paragraph-small-font-weight)] text-light-theme-colorwhite text-[length:var(--body-paragraph-small-font-size)] text-center tracking-[var(--body-paragraph-small-letter-spacing)] leading-[var(--body-paragraph-small-line-height)] whitespace-nowrap">
                  {notification.count}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* User profile section */}
      <div className="flex items-center h-14 gap-4">
        <div className="font-body-paragraph-lead text-theme-colordark">
          <span className="text-[#464154]">Hello, </span>
          <span>Samantha</span>
        </div>
        <Avatar className="w-14 h-14">
          <AvatarImage src="/placeholder-2.png" alt="User profile" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
