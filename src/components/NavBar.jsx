import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Topics from "./Topics";

const NavBar = () => {
  const { loggedIn, user } = useContext(UserContext);

  return (
    <div className="fixed font-bold flex space-x-2  px-2 flex-col w-1/6">
      {
        <>
          <div className="flex flex-col w-full text-center"></div>
          {loggedIn ? (
            <>
              <p className=" text-base text-[#0540F2] text-center">
                Logged in as {user}
              </p>
              <div className=" text-[#0540F2] text-center mt-5">
                <Topics />
              </div>
            </>
          ) : (
            <div className=" text-[#0540F2] text-center mt-5">
              <Topics />
            </div>
          )}
        </>
      }
    </div>
  );
};

export default NavBar;
