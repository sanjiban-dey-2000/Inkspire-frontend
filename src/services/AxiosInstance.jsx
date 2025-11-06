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

export const getBlogById=async(id)=>{
    return await api.get(`/api/blog/${id}`);
}

export const getMyBlogs=async()=>{
    return await api.get("/api/myblogs");
}

export const deleteBlogById=async(id)=>{
    return await api.delete(`/api/blog/${id}/remove`);
}

export const createBlog=async(data)=>{
    return await api.post("/api/blog/add",data);
}

export const searchBlogs=async(query)=>{
    return await api.get(`/api/blogs/search?q=${encodeURIComponent(query)}`);
}

export const updateBlogById=async(id,data)=>{
    return await api.put(`/api/blog/${id}/update`,data);
}