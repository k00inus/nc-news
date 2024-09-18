import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/utils";
import { RiSendPlaneFill } from "react-icons/ri";

const PostComment = ({ values: [comments, setComments] }) => {
  const { id, username } = useParams();

  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newComment = { article_id: id, username: username, body: comment };

    setComment("");
    setComments((prevComments) => {
      [...prevComments, comment];
    });

    postComment(id, newComment).catch((err) => {
      alert(err.response.data.msg);
    });
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-8/12 mx-auto p-4 shadow-lg rounded-md flex flex-col"
      >
        <textarea
          className="w-full placeholder:italic placeholder:text-slate-400 px-3 h-10 bg-slate-100 focus:bg-white"
          placeholder="Add a comment..."
          aria-label="add a comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button className="w-7 px-4 self-end mt-2" type="submit">
          <RiSendPlaneFill className=" text-[#0540F2]" />
        </button>
        {message ? (
          <em className="text-sm text-[#0540F2] self-center">{message}</em>
        ) : null}
      </form>
    </div>
  );
};

export default PostComment;
