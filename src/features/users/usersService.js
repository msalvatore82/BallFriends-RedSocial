import axios from "axios";

const API_URL = "http://localhost:8080";


const getInfo = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.get(API_URL + "/users/getInfo", {
      headers: {
        authorization: user?.token,
      },
    });
    
    return res.data;
  };
  const getUserById = async (_id)=>{
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.get(API_URL +"/users/getUserById/" + _id,{
      headers: {
        authorization: user?.token,
      },
    } );
  return res.data;
  };
  const getUserByName = async(name) => {
    const res = await axios.get(API_URL + "/users/getUserByName/" + name);
    return res.data;
};





const usersService = {
    getInfo,
    getUserById,
    getUserByName,


};

export default usersService;