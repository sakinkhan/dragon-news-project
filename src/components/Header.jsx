import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const now = new Date();
  const dayName = format(now, "EEEE");
  const date = format(now, "MMMM dd, yyyy");
  return (
    <div className="flex flex-col items-center justify-center gap-3 pt-[50px]">
      <img src={logo} alt="logo" className="w-[450px]" />
      <p className="text-accent text-[18px]">
        Journalism Without Fear or Favour
      </p>
      <p className="font-medium text-[20px]">
        <span className="text-accent-200">{dayName},</span>
        <span className="text-accent"> {date}</span>
      </p>
    </div>
  );
};

export default Header;
