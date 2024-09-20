import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Article from "./pages/Article";
import TopicsPage from "./pages/TopicsPage";
import PathNotFound from "./pages/PathNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/topic/:topic" element={<TopicsPage />}></Route>
        <Route path="/article/:id" element={<Article />}></Route>
        <Route path="*" element={<PathNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
