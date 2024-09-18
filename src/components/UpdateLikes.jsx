import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { patchArticleById } from "../utils/utils";
import { useState } from "react";
const UpdateLikes = ({ values: [article, setArticle] }) => {
  const [canVote, setCanVote] = useState(undefined);

  function handleLikes() {
    setCanVote(true);

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
    setCanVote(false);
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
        <button onClick={handleLikes} disabled={canVote}>
          <AiFillLike className="mr-1 text-blue-500" />
        </button>
        {article.votes}
        <button
          onClick={handleDislikes}
          disabled={canVote === false && canVote !== undefined}
        >
          <AiFillDislike className="ml-1 text-blue-500" />
        </button>
      </p>
    </>
  );
};

export default UpdateLikes;
