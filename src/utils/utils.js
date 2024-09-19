import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-project-pmrs.onrender.com/api",
});

export const fetchArticles = (topic) => {
  return ncNews
    .get("/articles", {
      params: {
        topic,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = (id) => {
  return ncNews.get("/articles/" + id).then(({ data }) => {
    return data.article[0];
  });
};

export const getCommentsByArticleId = (id) => {
  return ncNews.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleById = (article, votes) => {
  return ncNews
    .patch(`/articles/${article.article_id}`, votes)
    .then(({ data }) => {
      return data.article;
    });
};

export const fetchUsers = () => {
  return ncNews.get("/users").then(({ data }) => {
    return data.users;
  });
};

export const postComment = (id, comment) => {
  return ncNews.post(`/articles/${id}/comments`, comment).then(({ data }) => {
    return data.comment;
  });
};

export const deleteComment = (id) => {
  return ncNews.delete(`/comments/${id}`);
};

export const fetchTopics = () => {
  return ncNews.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
