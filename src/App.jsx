import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Article from "./pages/Article";
import TopicsPage from "./pages/TopicsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:topic" element={<TopicsPage />}></Route>
        {/* <Route path="/*" element={<Home />}></Route> */}
        <Route path="/article/:id" element={<Article />}></Route>
      </Routes>
    </>
  );
}

export default App;
