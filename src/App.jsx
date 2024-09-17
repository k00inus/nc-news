import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Article from "./pages/Article";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/pages/homepage/:username" element={<HomePage />}>
          <Route index element={<Home />}></Route>
          <Route path="article/:id" element={<Article />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
