import React from 'react';
import {UseTitle} from './TitleContext';
import axios from 'axios';

export default () => {
    const {title, setTitle} = UseTitle();
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        });
        setTitle('');
    };
    return (
        <div className='container'>
        <h1>Create Post</h1>
        <form onSubmit={onSubmit}>
        <div className="form-group">
         <label>Title</label>
            <input value = {title} onChange = {e => setTitle(e.target.value)} type="text" className="form-control" />   
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
};