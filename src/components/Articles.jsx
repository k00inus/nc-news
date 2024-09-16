import React, { useEffect, useState } from "react";
import { fetchArticles } from "./utils/utils";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <main className="w-7/12 mx-auto">
      {articles.length === 0 ? (
        <p className="text-center">Loading...</p>
      ) : (
        articles.map((article) => (
          <article key={article.article_id} className="">
            <Link to={`/pages/article/${article.article_id}`}>
              <div className="flex ">
                <p>{article.author}</p>
                <p className="">.{article.created_at}.</p>
                <p className="">{article.topic}</p>
              </div>
              <p className="">{article.title}</p>
              <div className="">
                <img src={article.article_img_url} alt="" />
              </div>
              <div className="flex justify-between">
                <p className="flex text-blue-500">
                  <AiFillLike />
                  {article.votes}
                </p>
                <p className="">{article.comment_count} comments</p>
              </div>
            </Link>
          </article>
        ))
      )}
    </main>
  );
};

export default Articles;
