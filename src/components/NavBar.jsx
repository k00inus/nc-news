import { Link, useParams } from "react-router-dom";
import Users from "./Users";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const NavBar = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const { username } = useParams();
  return (
    <div className=" bg-[#8DAEF2] font-bold flex space-x-2 p-3 px-24 justify-between">
      {loggedIn & (username !== undefined) ? (
        <>
          <Link
            className="text-xl hover:text-[#0540F2]"
            to={`/pages/homepage/${username}`}
          >
            Dashboard
          </Link>
          <div className="flex w-1/4 justify-between">
            <p className=" text-sm mr-4 self-end text-[#0540F2]">
              Logged in as {username}
            </p>
            <Link className="text-xl hover:text-[#0540F2]" to="#">
              Profile
            </Link>
            <Link
              className="text-xl hover:text-[#0540F2]"
              to="/"
              onClick={() => {
                setLoggedIn(false);
              }}
            >
              Logout
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link className="text-xl hover:text-[#0540F2]" to="/">
            Home
          </Link>
          <Users />
        </>
      )}
    </div>
  );
};

export default NavBar;
