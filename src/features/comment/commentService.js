import axios from "axios";

const API_URL = "http://localhost:8080";

const getAllComment = async () => {
  const res = await axios.get(API_URL + "/comment/getAllComment");
  return res.data;
};

const commentService = {
    getAllComment,

  };
  
  export default commentService;