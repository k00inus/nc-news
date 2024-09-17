import React, { useEffect, useState } from "react";
import { fetchArticles, timeAgo } from "./utils/utils";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
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
          <article
            key={article.article_id}
            className="border-b-4 w-7/12 mx-auto p-3 shadow-lg rounded-lg hover:bg-slate-100"
          >
            <Link to={`/pages/article/${article.article_id}`}>
              <p className="text-xs font-bold text-gray-500">
                #{article.topic}
              </p>
              <div className="flex text-[11px] font-bold text-gray-500 ">
                <p className="mr-2">{article.author}</p>
                <p className="italic">{timeAgo(article.created_at)}.</p>
              </div>
              <p className="my-1.5 text-xl">{article.title}</p>
              <div className=" my-2.5">
                <img className="rounded" src={article.article_img_url} alt="" />
              </div>
            </Link>
            <div className="flex justify-between text-sm">
              <p className="flex  text-gray-500">
                <AiFillLike className="mr-1 mt-[2px] text-blue-500 " />
                {article.votes}
                <AiFillDislike className="ml-1 mt-[2px] text-blue-500" />
              </p>
              <p className=" text-gray-500">{article.comment_count} comments</p>
            </div>
          </article>
        ))
      )}
    </main>
  );
};

export default Articles;
