import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { patchArticleById } from "./utils/utils";
const UpdateLikes = ({ values: [article, setArticle] }) => {
  function handleLikes() {
    setArticle((prevData) => ({
      ...prevData,
      votes: article.votes + 1,
    }));
    patchArticleById(article, {
      inc_votes: 1,
    }).catch((err) => {
      setArticle((prevData) => ({
        ...prevData,
        votes: article.votes - 1,
      }));
    });
  }

  function handleDislikes() {
    setArticle((prevData) => ({
      ...prevData,
      votes: article.votes - 1,
    }));
    patchArticleById(article, {
      inc_votes: -1,
    }).catch((err) => {
      setArticle((prevData) => ({
        ...prevData,
        votes: article.votes + 1,
      }));
    });
  }

  return (
    <>
      <p className="flex text-gray-500">
        <AiFillLike
          className="mr-1 mt-[2px] text-blue-500"
          onClick={handleLikes}
        />
        {article.votes}
        <AiFillDislike
          className="ml-1 mt-[2px] text-blue-500"
          onClick={handleDislikes}
        />
      </p>
    </>
  );
};

export default UpdateLikes;
