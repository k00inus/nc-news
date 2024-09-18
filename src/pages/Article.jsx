import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/utils";
import { timeAgo } from "../utils/otherUtils";
import NotFound from "./NotFound";
import UpdateLikes from "../components/UpdateLikes";
import CommentList from "../components/CommentList";
import Loading from "../components/Loading";

const Article = () => {
  const [article, setArticle] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);

  const { id, username } = useParams();

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

  useEffect(getArticle, []);

  return (
    <div>
      <main className="w-9/12 mx-auto">
        {isLoading ? (
          <Loading />
        ) : error.length > 0 ? (
          <NotFound error={error} />
        ) : article ? (
          <article className="w-8/12 mx-auto border-b-4 p-4">
            <p className="font-bold text-gray-500">#{article.topic}</p>
            <div className="flex text-sm font-bold text-gray-500 ">
              <p className="mr-2">{article.author}</p>
              <p className="">{timeAgo(article.created_at)}</p>
            </div>

            <p className="mt-2.5 text-xl">{article.title}</p>
            <div className="">
              <img
                className="w-full rounded-md my-5"
                src={article.article_img_url}
                alt={article.title}
              />
            </div>
            <div className="flex justify-between text-sm">
              <UpdateLikes values={[article, setArticle]} />
              <p className="">{article.comment_count} comments</p>
            </div>
          </article>
        ) : (
          <Loading />
        )}

        {isLoading ? null : <CommentList />}
      </main>
    </div>
  );
};

export default Article;
