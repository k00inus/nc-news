import { useEffect, useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { getCommentsByArticleId } from "../utils/utils";
import { timeAgo } from "../utils/otherUtils";
import { useParams } from "react-router-dom";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [commentError, setCommentError] = useState([]);
  const { id, username } = useParams();

  function getComments() {
    getCommentsByArticleId(id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        setCommentError(err.response.data.msg);
      });
  }

  useEffect(getComments, []);
  return (
    <div>
      {comments.map((comment) => (
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
      ))}
    </div>
  );
};

export default CommentList;
