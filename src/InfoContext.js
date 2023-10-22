import React, { useEffect } from "react";
import {useContext, useState, createContext} from "react";
import axios from "axios";

const TitleContext = createContext();

export const TitleProvider = ({children}) => {
    const [title, setTitle] = useState("");
    return (
        <TitleContext.Provider value={{title, setTitle}}>
            {children}
        </TitleContext.Provider>
    );
}
export const UseTitle = () => useContext(TitleContext);


const PostContext = createContext();

export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState("");
    const getPostsdata = async () => {
        const result = await axios.get("http://localhost:4000/posts");
        setPosts(result.data);
    };
    useEffect(() => {getPostsdata();}, []);
    const renderedPosts = Object.values(posts).map(post => {
        return (
        <div className="card" style={{width: "30%", marginBottom: "20px"}} key={post.id}>
            <div className="card-body">
                <h3>{post.title}</h3>
            </div>
        </div>
        );
        
    }
    )
    return (
        <PostContext.Provider value={{renderedPosts}}>
            {children}
        </PostContext.Provider>
    );
}
export const UsePosts = () => useContext(PostContext);


const commentCreateContext = createContext();

export const commentCreateContextProvider = ({children}) => {
    const [posts, setPosts] = useState("");
    const getPostsdata = async () => {
        const result = await axios.get("http://localhost:4000/posts");
        setPosts(result.data);
    };
    useEffect(() => {getPostsdata();}, []);
    const postComments = Object.values(posts).map(post => {
        return (
        <div className="card" style={{width: "30%", marginBottom: "20px"}} key={post.id}>
            <div className="card-body">
                <h3>{post.title}</h3>
            </div>
        </div>
        );
        
    }
    )
    return (
        <commentCreateContext.Provider value={{postComments}}>
            {children}
        </commentCreateContext.Provider>
    );
}
export const UseCommentCreate = () => useContext(commentCreateContext);