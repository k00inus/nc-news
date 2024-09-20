import Articles from "../components/Articles";
import Filters from "../components/Filters";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex justify-between">
        <NavBar />

        <Articles />
        <Filters />
      </main>
    </>
  );
};

export default Home;
