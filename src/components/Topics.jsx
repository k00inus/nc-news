import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/utils";
import { Link } from "react-router-dom";
import { notify } from "../utils/otherUtils";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics()
      .then((topics) => {
        setTopics(topics);
      })
      .catch((err) => {
        notify(err.response.data.msg, { type: "error" });
      });
  }, []);

  return (
    <div>
      <Link className="hover:bg-[#0540F2] hover:text-white" to={`/`}>
        All topics
      </Link>
      <h3 className="decoration-double  decoration-[#8DAEF2] decoration-1 underline">
        Topic categories
      </h3>
      <ol className="">
        {topics
          ? topics.map((topic) => (
              <li key={topic.slug} className="">
                <Link
                  className="hover:bg-[#0540F2] hover:text-white"
                  to={`/topic/${topic.slug}`}
                >
                  {topic.slug}
                </Link>
              </li>
            ))
          : null}
      </ol>
    </div>
  );
};

export default Topics;
