import { timeAgo } from "../utils/otherUtils";
import UpdateLikes from "./UpdateLikes";

const SingleArticle = ({ values: [article, setArticle] }) => {
  return (
    <>
      {
        <article className="w-full mx-auto border-b-4 p-4">
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
      }
    </>
  );
};

export default SingleArticle;
