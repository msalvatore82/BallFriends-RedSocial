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
  const res = await axios.put(API_URL + '/posts/like/' + _id,{}, {
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
const updatePost = async (data) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { _id } = data;
  const { post } = data;
  const postInfo = { post }
  const res = await axios.put(API_URL + "/posts/updatePost/" + _id, postInfo, {
    headers: {
      authorization: user.token,
    },
  } );
return res.data;
};
const getInfo = async() => {
  const user = JSON.parse(localStorage.getItem('user'));
  const res = await axios.get(API_URL + '/users/user', {
      headers: {
          authorization: user.token
      }
  })
  return res.data
}

const getPostById = async (_id)=>{
    const res = await axios.get(API_URL +"/posts/getPostById/" + _id,{
      headers: {
        authorization: user?.token,
      },
    } );
  return res.data;
  };

const getPostByName = async(postTitle)=>{
  const res = await axios.get(API_URL + "/posts/getPostByName/" + postTitle)
  return res.data
}

const postsService = {
  getAllPosts,
  createPost,
  like,
  deletePost,
  disLike,
  updatePost,
  getPostById,
  getInfo,
  getPostByName,
};

export default postsService;