import Articles from "../components/Articles";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex relative">
        <NavBar />
        <Articles />
      </main>
    </>
  );
};

export default Home;
