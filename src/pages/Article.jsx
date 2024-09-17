import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  getCommentsByArticleId,
  timeAgo,
} from "../components/utils/utils";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import Header from "../components/Header";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState([]);
  const [commentError, setCommentError] = useState([]);
  const { id } = useParams();

  function getArticle() {
    getArticleById(id)
      .then((article) => {
        setArticle(article);
      })
      .catch((err) => {
        setError(err);
      });
  }

  function getComments() {
    getCommentsByArticleId(id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        setCommentError(err);
      });
  }

  useEffect(getArticle, []);
  useEffect(getComments, []);

  return (
    <div>
      <Header />
      <main className="w-9/12 mx-auto">
        {article.length === 0 ? (
          <p className="text-center">Loading...</p>
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

        {comments.length === 0 ? (
          <p className="text-center">Loading...</p>
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
