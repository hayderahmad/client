import React from 'react';
import PostCreate from './postCreate';
import { TitleProvider } from './TitleContext';
export default () => {
    return (
        <TitleProvider>
            <PostCreate />
        </TitleProvider>
    );
}