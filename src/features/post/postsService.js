import axios from "axios";

const API_URL = "http://localhost:8080";
const user = JSON.parse(localStorage.getItem("user"));


const getAllPosts = async () => {
  const res = await axios.get(API_URL + "/posts/getAll");
  return res.data;
};

const createPost = async (postData) => {
  const res = await axios.post(API_URL + "/posts/createPostByUser", postData ,{
    headers: {
      authorization: user?.token,
    },        
  });
  return res.data;
};

const like = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(API_URL + "/posts/like/"+_id,{}, {
      headers: {
        authorization: user?.token,
      },
    } );
  return res.data;
};
const disLike = async(_id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const res = await axios.put(API_URL + '/posts/nolikes/' + _id, {}, {
      headers: {
          authorization: user?.token,
      }
  });
  return res.data;
};

const deletePost = async (_id) => {
  const res = await axios.delete(API_URL + "/posts/deletePost/" + _id, {
    headers: {
      authorization: user?.token,
    },
  } );
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
  createPost,
  like,
  deletePost,
  disLike,
//   getPostById,
//   getPostByName,
//   destroyPostById
};

export default postsService;