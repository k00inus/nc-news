import Header from "../components/Header";
import NavBar from "../components/NavBar";

const PathNotFound = () => {
  return (
    <>
      <Header />
      <NavBar />
      <main className="w-7/12 mx-auto rounded-lg">
        <h1 className="text-center text-7xl text-red-900 ">Page not found!</h1>
      </main>
    </>
  );
};

export default PathNotFound;
