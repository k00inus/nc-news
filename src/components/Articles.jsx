import React, { useContext, useEffect, useState } from "react";
import { fetchArticles } from "../utils/utils";
import { timeAgo } from "../utils/otherUtils";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Articles = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles()
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  }, []);

  return (
    <main className="w-7/12 mx-auto">
      {articles.length === 0 ? (
        <article className="w-7/12 mx-auto p-3 shadow-lg rounded-lg flex justify-center">
          <iframe src="https://lottie.host/embed/92d9ca28-0c6e-4810-a00d-429e657f401a/S9v2O6kwum.json"></iframe>
        </article>
      ) : (
        articles.map((article) => (
          <article
            key={article.article_id}
            className="border-b-4 w-7/12 mx-auto p-3 shadow-lg rounded-lg hover:bg-slate-100 "
          >
            <Link
              to={loggedIn ? `article/${article.article_id}` : null}
              onClick={() => {
                !loggedIn
                  ? alert("you must be logged in to read articles!")
                  : null;
              }}
            >
              <p className="text-xs font-bold text-gray-500">
                #{article.topic}
              </p>
              <div className="flex text-[11px] font-bold text-gray-500 ">
                <p className="mr-2">{article.author}</p>
                <p className="italic">{timeAgo(article.created_at)}.</p>
              </div>
              <p className="my-1.5 text-xl">{article.title}</p>
              <div className=" my-2.5">
                <img
                  className="rounded"
                  src={article.article_img_url}
                  alt={article.title}
                />
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
