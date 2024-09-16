import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../components/utils/utils";
import { AiFillLike } from "react-icons/ai";
import Header from "../components/Header";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getArticleById(id)
      .then((article) => {
        setArticle(article);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <main className="w-7/12 mx-auto">
        {article.length === 0 ? (
          <p className="text-center">Loading...</p>
        ) : (
          article.map((a) => (
            <article key={a.article_id} className="">
              <div className="flex ">
                <p>{a.author}</p>
                <p className="">.{a.created_at}.</p>
                <p className="">{a.topic}</p>
              </div>
              <p className="">{a.title}</p>
              <div className="">
                <img src={a.article_img_url} alt="" />
              </div>
              <div className="flex justify-between">
                <p className="flex text-blue-500">
                  <AiFillLike />
                  {a.votes}
                </p>
                <p className="">{a.comment_count} comments</p>
              </div>
            </article>
          ))
        )}
      </main>
    </div>
  );
};

export default Article;
