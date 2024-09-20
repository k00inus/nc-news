import { useContext, useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../utils/utils";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Loading from "../components/Loading";
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";
import Filters from "../components/Filters";
import NavBar from "../components/NavBar";

const TopicsPage = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState([]);
  const { filter } = useContext(UserContext);
  const { topic } = useParams();
  const { sort_by, order } = filter;

  useEffect(() => {
    fetchArticlesByTopic(topic, sort_by, order)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  }, [topic, sort_by, order]);
  return (
    <>
      <Header />
      <div className="flex justify-between">
        <NavBar />
        <main>
          {articles.length === 0 ? (
            <Loading />
          ) : (
            <ArticleCard articles={articles} />
          )}
        </main>
        <Filters />
      </div>
    </>
  );
};

export default TopicsPage;
