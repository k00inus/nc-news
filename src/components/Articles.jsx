import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/utils";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    fetchArticles(topic)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  }, [topic]);

  return (
    <main className="w-7/12 mx-auto">
      {articles.length === 0 ? (
        <Loading />
      ) : (
        <ArticleCard articles={articles} />
      )}
    </main>
  );
};

export default Articles;
