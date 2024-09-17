import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  getCommentsByArticleId,
} from "../components/utils/utils";
import { timeAgo } from "../components/utils/otherUtils";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import Header from "../components/Header";
import NotFound from "./NotFound";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);
  const [commentError, setCommentError] = useState([]);
  const { id } = useParams();

  function getArticle() {
    setIsLoading(true);
    getArticleById(id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.msg);
        setIsLoading(false);
      });
  }

  function getComments() {
    getCommentsByArticleId(id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        setCommentError(err.response.data.msg);
      });
  }

  useEffect(getArticle, []);
  useEffect(getComments, []);

  return (
    <div>
      <Header />
      <main className="w-9/12 mx-auto">
        {isLoading ? (
          <article className="w-7/12 mx-auto p-3 shadow-lg rounded-lg flex justify-center">
            <iframe src="https://lottie.host/embed/92d9ca28-0c6e-4810-a00d-429e657f401a/S9v2O6kwum.json"></iframe>
          </article>
        ) : error.length > 0 ? (
          <NotFound error={error} />
        ) : (
          article.map((a) => (
            <article
              key={a.article_id}
              className="w-8/12 mx-auto border-b-4 p-4"
            >
              <p className="font-bold text-gray-500">#{a.topic}</p>
              <div className="flex text-sm font-bold text-gray-500 ">
                <p className="mr-2">{a.author}</p>
                <p className="">{timeAgo(a.created_at)}</p>
              </div>
              <p className="mt-2.5 text-xl">{a.title}</p>
              <div className="">
                <img
                  className="w-full rounded-md my-5"
                  src={a.article_img_url}
                  alt=""
                />
              </div>
              <div className="flex justify-between text-sm">
                <p className="flex text-gray-500">
                  <AiFillLike className="mr-1 mt-[2px] text-blue-500" />
                  {a.votes}
                  <AiFillDislike className="ml-1 mt-[2px] text-blue-500" />
                </p>
                <p className="">{a.comment_count} comments</p>
              </div>
            </article>
          ))
        )}

        {isLoading ? (
          <article className="w-7/12 mx-auto p-3 shadow-lg rounded-lg flex justify-center">
            <iframe src="https://lottie.host/embed/92d9ca28-0c6e-4810-a00d-429e657f401a/S9v2O6kwum.json"></iframe>
          </article>
        ) : (
          comments.map((comment) => (
            <article
              key={comment.comment_id}
              className="w-8/12 mx-auto p-4 shadow-lg rounded-md"
            >
              <div className="flex text-gray-500 text-sm">
                <p className="font-bold mr-3">{comment.author}</p>
                <p className="">{timeAgo(comment.created_at)}</p>
              </div>
              <p className="my-3 bg-slate-100 p-4 rounded-lg">{comment.body}</p>

              <p className="flex text-gray-500 text-sm">
                <AiFillLike className="mr-1 mt-[2px] text-blue-500" />
                {comment.votes}
                <AiFillDislike className="ml-1 mt-[2px] text-blue-500" />
              </p>
            </article>
          ))
        )}
      </main>
    </div>
  );
};

export default Article;
