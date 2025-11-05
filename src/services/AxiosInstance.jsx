import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:8080",
    withCredentials:true,
});

api.interceptors.request.use((config)=>{
    const token=localStorage.getItem("token");
    if(token){
        config.headers["Authorization"]=`Bearer ${token}`;
    }
    return config;
});


export const signup=async (data)=>{
    return await api.post("/auth/signup",data);
}

export const login=async(data)=>{
    return await api.post("/auth/login",data);
}

export const allBlogs=async()=>{
    return await api.get("/api/blogs/");
}