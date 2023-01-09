import axios from "axios";

const API_URL = "http://localhost:8080";
const user = JSON.parse(localStorage.getItem("user"));

const getAllComment = async () => {
  const res = await axios.get(API_URL + "/comment/getAllComment");
  return res.data;
};
const createComment = async (formData) => {
  const res = await axios.post(API_URL + "/comment/comment", formData, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};
const likeComment = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const res = await axios.put(
    API_URL + "/comment/likeComment/" + _id,
    {},
    {
      headers: {
        authorization: user?.token,
      },
    }
  );
  return res.data;
};

const deleteComment = async (_id) => {
  const res = await axios.delete(API_URL + "/comment/deleteComment/" + _id, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};

const commentService = {
  getAllComment,
  createComment,
  deleteComment,
  likeComment,
};

export default commentService;
