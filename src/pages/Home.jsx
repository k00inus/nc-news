import Articles from "../components/Articles";
import Filters from "../components/Filters";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex justify-between">
        <div className="w-1/6 h-[100vh] relative">
          <NavBar />
        </div>

        <Articles />
        <Filters />
      </main>
    </>
  );
};

export default Home;
