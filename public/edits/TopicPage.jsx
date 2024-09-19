import { useEffect, useState } from "react";
import { fetchArticles } from "../../src/utils/utils";
import { useParams } from "react-router-dom";
import Loading from "../../src/components/Loading";
import ArticleCard from "../../src/components/ArticleCard";
import NavBar from "../../src/components/NavBar";
import Header from "../../src/components/Header";

const TopicPage = () => {
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
    <>
      <div className="flex relative">
        <NavBar />
        <main className="w-7/12 mx-auto">
          {articles.length === 0 ? (
            <Loading />
          ) : (
            <ArticleCard articles={articles} />
          )}
        </main>
      </div>
    </>
  );
};

export default TopicPage;
