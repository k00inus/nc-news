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
      <h3 className="decoration-double  decoration-[#8DAEF2] decoration-1 underline">
        Topics
      </h3>
      <ol className="">
        {topics
          ? topics.map((topic) => (
              <li key={topic.slug} className="">
                <Link className="" to={`/${topic.slug}`}>
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
