import { useContext, useEffect, useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { getCommentsByArticleId } from "../utils/utils";
import { notify, timeAgo } from "../utils/otherUtils";
import { useParams } from "react-router-dom";
import PostComment from "./PostComment";
import { UserContext } from "../contexts/UserContext";
import Loading from "./Loading";
import { deleteComment } from "../utils/utils";

const CommentList = () => {
  const { loggedIn, user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [commentError, setCommentError] = useState([]);
  const { id } = useParams();

  function getComments() {
    getCommentsByArticleId(id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        setCommentError(err.response.data.msg);
      });
  }

  function handleDelete(id) {
    const confirm = window.confirm("Do you want to delete this comment?");

    if (confirm) {
      setDisabled(true);
      deleteComment(id)
        .then(() => {
          notify("your message has been deleted", { type: "info" });
          setDisabled(false);
        })
        .catch((err) => {
          notify(err.response.data.msg, { type: "error" });
          setDisabled(false);
        });
    }
  }

  useEffect(getComments, [comments]);
  return (
    <div>
      {loggedIn ? (
        <>
          <PostComment values={[comments, setComments]} />
          {comments ? (
            comments.map((comment) => (
              <article
                key={comment.comment_id}
                className="w-8/12 mx-auto p-4 shadow-lg rounded-md"
              >
                <div className="flex text-gray-500 text-sm">
                  <p className="font-bold mr-3">{comment.author}</p>
                  <p className="">{timeAgo(comment.created_at)}</p>
                </div>
                <p className="my-3 bg-slate-100 p-4 rounded-lg">
                  {comment.body}
                </p>
                <div className="flex justify-between">
                  <p className="flex text-gray-500 text-sm justify-between">
                    <AiFillLike className="mr-1 mt-[2px] text-blue-500" />
                    {comment.votes}
                    <AiFillDislike className="ml-1 mt-[2px] text-blue-500" />
                  </p>
                  {loggedIn && user === comment.author ? (
                    <button
                      className="bg-[#0540F2] hover:bg-[#8DAEF2] hover:text-[#0540F2] py-1 px-2 rounded-md text-white"
                      onClick={(e) => handleDelete(comment.comment_id)}
                      disabled={disabled}
                    >
                      Delete
                    </button>
                  ) : null}
                </div>
              </article>
            ))
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <article className="w-8/12 mx-auto p-4 shadow-lg rounded-md">
          <h2>You must be logged in to read comments</h2>
        </article>
      )}
    </div>
  );
};

export default CommentList;
