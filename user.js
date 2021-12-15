const Axios = require("axios");
const  getUserDetails=(userRequest)=> {
  return  Axios.get("https://reqres.in" + userRequest).then((res) =>{
    console.log(res);
  return res.data
  }).catch(error=>{
    console.log("error:",error.message);
    return error.message
  })
}

exports.getUserDetails = getUserDetails;
