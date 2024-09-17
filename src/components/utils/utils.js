import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-project-pmrs.onrender.com/api",
});

export const fetchArticles = () => {
  return ncNews.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (id) => {
  return ncNews.get("/articles/" + id).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (id) => {
  return ncNews.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
