import React, { useEffect, useState } from "react";
import { fetchArticles } from "./utils/utils";
import { AiFillLike } from "react-icons/ai";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then(({ articles }) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-7/12 mx-auto">
      {articles.length === 0 ? (
        <p className="text-center">Loading...</p>
      ) : (
        articles.map((article) => (
          <main key={article.article_id} className="">
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
          </main>
        ))
      )}
    </div>
  );
};

export default Articles;
