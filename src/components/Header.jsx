import { useContext } from "react";
import logo from "../assets/Images/logo.png";
import { ThemeContext } from "../Context/ThemeContext";

import {
  HiMoon,
  HiOutlineMagnifyingGlass,
  HiSun,
} from "react-icons/hi2";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center p-3">
      <img src={logo} alt="logo" width={70} height={70} />
      <div className="w-full flex bg-slate-200 p-2 items-center mx-5 rounded-full">
        <HiOutlineMagnifyingGlass className="mr-2" />
        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent outline-none w-full"
        />
      </div>
      <div>
        {theme === "light" ? (
          <HiMoon
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
            className="bg-slate-200 text-black text-[35px] p-1 rounded-full cursor-pointer"
          />
        ) : (
          <HiSun
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
            className="bg-slate-200 text-black text-[35px] p-1 rounded-full cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};
