import axios from "axios";

export const getCart = async(user)=>{
    try {
     const res = await axios.get(`https://food-fiesta-server.onrender.com/get-cart/${user._id}`)
     const data = await res.data
     
     return data;
    } catch (error) {
     console.log(error.message);
    }
}