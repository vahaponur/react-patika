import axios from "axios";

const getUsers=async(userId)=>{

 const {data:user}=await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
 const {data:post}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
 return {user,post};
}

const result = await getUsers(3);
console.log(result);
