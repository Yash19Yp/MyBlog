import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {},
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getArticles = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dev.to/api/articles/${path?.id}`,
    method: "get",
    params,
    headers,
    data,
  });
};
export const getArticles1 = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dev.to/api/articles`,
    method: "get",
    params,
    headers,
    data,
  });
};
