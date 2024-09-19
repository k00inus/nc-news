import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/utils";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics()
      .then((topics) => {
        setTopics(topics);
      })
      .catch((err) => {
        setError(err.response.data.msg);
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
                  to={`/${topic.slug}`}
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
