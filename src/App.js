import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
    const [post, setPost] = useState([
        {
            username: 'Peter',
            caption: 'Wow it works',
            imageUrl:
                'https://www.automobilemag.com/uploads/sites/11/2020/07/2001-Acura-Integra-Type-R-lead-image.jpg',
        },
        {
            username: 'Peter',
            caption: 'Wow it works',
            imageUrl:
                'https://www.automobilemag.com/uploads/sites/11/2020/07/2001-Acura-Integra-Type-R-lead-image.jpg',
        },
    ]);

    return (
        <div className="app">
            <img
                className="app__header"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
            />
            <h1>Hello Everyone!!!</h1>
            {
            post.map(post => (
                <Post
                    username={post.username}
                    caption={post.caption}
                    imageUrl={post.imageUrl}
                />
            ))
            }
        </div>
    );
}

export default App;
