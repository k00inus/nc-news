import { useContext, useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../utils/utils";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Loading from "../components/Loading";
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";
import Filters from "../components/Filters";
import NavBar from "../components/NavBar";
import { notify } from "../utils/otherUtils";
import { ToastContainer } from "react-toastify";

const TopicsPage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { filter } = useContext(UserContext);
  const { topic } = useParams();
  const { sort_by, order } = filter;

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesByTopic(topic, sort_by, order)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        notify(err.response.data.msg, { type: "error" });
        setIsLoading(false);
      });
  }, [topic, sort_by, order]);
  return (
    <>
      <Header />
      <div className="flex justify-between">
        <div className="w-1/6 h-[100vh] relative">
          <NavBar />
        </div>
        <main>
          {isLoading ? (
            <Loading />
          ) : articles ? (
            <ArticleCard articles={articles} />
          ) : (
            <Loading />
          )}
          <ToastContainer position="top-center" theme="colored" />
        </main>
        <Filters />
      </div>
    </>
  );
};

export default TopicsPage;
