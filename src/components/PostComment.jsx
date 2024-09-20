import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/utils";
import { RiSendPlaneFill } from "react-icons/ri";
import { UserContext } from "../contexts/UserContext";
import { notify } from "../utils/otherUtils";
import { ToastContainer } from "react-toastify";

const PostComment = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);

  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newComment = { article_id: id, username: user, body: comment };

    setComment("");

    postComment(id, newComment)
      .then(() =>
        notify("your message has been posted successfully!", {
          type: "success",
        })
      )
      .catch((err) => {
        notify(`Oops, something went wrong! ${err.response.data.msg}`, {
          type: "error",
        });
      });
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto p-4 shadow-lg rounded-md flex flex-col"
      >
        <textarea
          className="w-full placeholder:italic placeholder:text-slate-400 px-3 h-10 rounded-md bg-slate-100 focus:bg-white"
          placeholder="Add a comment..."
          aria-label="add a comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button
          className="w-7 px-4 self-end mt-2"
          type="submit"
          disabled={comment === ""}
        >
          <RiSendPlaneFill className=" text-[#0540F2]" />
        </button>
      </form>
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
};

export default PostComment;
