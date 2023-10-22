import React from 'react';
import PostCreate from './postCreate';
import { TitleProvider, PostProvider } from './InfoContext';
import PostList from './PostList';
export default () => {
    return (
        <div>
        <TitleProvider>
            <PostCreate />
        </TitleProvider>
            <hr />
            <h1>Posts</h1>
        <PostProvider>
            <PostList />
        </PostProvider>
        </div>
    );
}