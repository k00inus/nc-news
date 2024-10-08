import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/utils";
import NotFound from "./NotFound";
import CommentList from "../components/CommentList";
import Loading from "../components/Loading";
import { UserContext } from "../contexts/UserContext";
import NavBar from "../components/NavBar";
import SingleArticle from "../components/SingleArticle";
import Header from "../components/Header";
import Filters from "../components/Filters";
import Footer from "../components/Footer";

const Article = () => {
  const [article, setArticle] = useState({});
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);

  const { id } = useParams();

  function getArticle() {
    setIsLoading(true);
    setLoggedIn(true);
    getArticleById(id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.msg);
        setIsLoading(false);
      });
  }

  useEffect(getArticle, []);

  return (
    <>
      <Header />
      <div className="flex relative">
        <div className="w-1/6 h-[100vh] relative">
          <NavBar />
        </div>
        <main className="w-[45%] mx-auto">
          {isLoading ? (
            <Loading />
          ) : error.length > 0 ? (
            <NotFound error={error} />
          ) : article ? (
            loggedIn ? (
              <SingleArticle values={[article, setArticle]} />
            ) : null
          ) : (
            <Loading />
          )}

          {isLoading ? null : error.length > 0 ? null : <CommentList />}
        </main>
        <Filters />
      </div>
      <Footer />
    </>
  );
};

export default Article;
