import { timeAgo } from "../utils/otherUtils";
import UpdateLikes from "./UpdateLikes";

const SingleArticle = ({ values: [article, setArticle] }) => {
  console.log(article);

  return (
    <>
      {
        <article className="w-full mx-auto p-3 ">
          <p className="font-bold text-gray-500">#{article.topic}</p>
          <div className="flex text-sm font-bold text-gray-500 ">
            <p className="mr-2">{article.author}</p>
            <p className="">{timeAgo(article.created_at)}</p>
          </div>

          <p className="mt-2.5 text-xl">{article.title}</p>
          <div className="p-2 rounded-lg my-3">
            <img
              className="w-full rounded-lg"
              src={article.article_img_url}
              alt={article.title}
            />
          </div>
          <p className="p-3 text-lg  bg-slate-100 rounded-lg ">
            {article.body}
          </p>
          <div className="flex justify-between text-sm mt-3 w-full border-t-2 border-blue-500">
            <UpdateLikes values={[article, setArticle]} />
            <p className="">{article.comment_count} comments</p>
          </div>
        </article>
      }
    </>
  );
};

export default SingleArticle;
