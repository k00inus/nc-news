import { Link } from "react-router-dom";
import Users from "./Users";

const Header = () => {
  return (
    <header className="bg-[#0540F2] text-white mt-0 pt-2 flex flex-col">
      <h1 className="text-center font-black my-1 text-5xl  w-full">NC News</h1>
      <div className=" font-bold flex space-x-2 justify-between px-24  py-2 ">
        <>
          <Link className="text-xl hover:text-[#8DAEF2]" to="/">
            Home
          </Link>
          <Users />
        </>
      </div>
    </header>
  );
};

export default Header;
