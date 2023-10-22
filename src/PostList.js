import React from "react";
import {UsePosts} from "./InfoContext";

export default () => {
    const {renderedPosts} = UsePosts({});
    
return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>};