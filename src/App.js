import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db} from './firebase';

function App() {
    const [posts, setPosts] = useState([]);

    // useEffect Runs a piece of code based on a specific condition

    useEffect(() => {
        //this is where the code runs
        db.collection('posts').onSnapshot(snapshot => {
            // everytime a new post is added, this code fires
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div className="app">
            <img
                className="app__header"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
            />
            <h1>IG stories go here!!!</h1>
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
