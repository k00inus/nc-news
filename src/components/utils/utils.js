import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-project-pmrs.onrender.com/api",
});

export const fetchArticles = () => {
  return ncNews.get("/articles").then(({ data }) => {
    return data;
  });
};
