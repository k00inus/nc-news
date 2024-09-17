import { useContext } from "react";
import Articles from "../components/Articles";
import Header from "../components/Header";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  return (
    <>
      {loggedIn ? (
        <Articles />
      ) : (
        <>
          <Header />
          <Articles />
        </>
      )}
    </>
  );
};

export default Home;
