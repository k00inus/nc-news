import { useContext, useEffect, useState } from "react";
import { fetchArticles } from "../utils/utils";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import TopicsPage from "../pages/TopicsPage";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState([]);
  const { filter } = useContext(UserContext);
  const { sort_by, order } = filter;
  const { topic } = useParams();

  useEffect(() => {
    fetchArticles(sort_by, order)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  }, [sort_by, order]);

  return (
    <main className="w-[35%] border">
      {topic ? (
        <TopicsPage />
      ) : articles.length === 0 ? (
        <Loading />
      ) : (
        <ArticleCard articles={articles} />
      )}
    </main>
  );
};

export default Articles;
