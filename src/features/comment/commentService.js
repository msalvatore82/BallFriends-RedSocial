import axios from "axios";

const API_URL = "http://localhost:8080";
const user = JSON.parse(localStorage.getItem("user"));


const getAllComment = async () => {
  const res = await axios.get(API_URL + "/comment/getAllComment");
  return res.data;
};
const createComment = async (formData) => {
    const res = await axios.post(API_URL + "/comment/comment", 
    {  formData },
        {
          headers: {
            authorization: user?.token,
          },
        });
      return res.data;
    };

const commentService = {
    getAllComment,
    createComment

  };
  
  export default commentService;

