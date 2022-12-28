import axios from "axios";

const API_URL = "http://localhost:8080";

const getAllPosts = async () => {
  const res = await axios.get(API_URL + "/posts/getAll");
  return res.data;
};

// const getPostById = async (id)=>{
//     const res = await axios.get(API_URL +"/posts/getPostById/" + id)
//     return res.data
// }

// const getPostByName = async(title)=>{
//   const res = await axios.get(API_URL + "/posts/getPostByName/" + title)
//   return res.data
// }

// const destroyPostById = async(id)=>{
//   const user = JSON.parse(localStorage.getItem("user"));
//   const res = await axios.delete(API_URL +"/posts/destroyPostById/"+ id,
//   {
//     headers: {
//       authorization: user?.token,
//     },
//   }
//   )
//   return res.data
// }

const postsService = {
  getAllPosts,
//   getPostById,
//   getPostByName,
//   destroyPostById
};

export default postsService;