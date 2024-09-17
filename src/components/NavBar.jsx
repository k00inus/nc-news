import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" bg-[#8DAEF2] font-bold flex space-x-2 p-3 px-24">
      <Link className="text-xl hover:text-[#0540F2]" to="/">
        Home
      </Link>
    </div>
  );
};

export default NavBar;
