import { Outlet, useParams } from "react-router-dom";
import Header from "../components/Header";

const HomePage = () => {
  const { username } = useParams();
  return (
    <>
      <Header />
      <div className="flex flex-col space-x-16">
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default HomePage;
