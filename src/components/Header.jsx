import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="bg-[#0540F2] text-white mt-0 pt-4">
      <h1 className="text-center font-black my-3 text-5xl ">NC News</h1>
      <NavBar />
    </header>
  );
};

export default Header;
