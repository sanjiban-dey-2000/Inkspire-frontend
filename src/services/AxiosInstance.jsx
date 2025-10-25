import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:8080",
    withCredentials:true,
});


export const signup=async (data)=>{
    return await api.post("/auth/signup",data);
}