import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({username, caption, imageUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="Peter"
                    src="https://www.automobilemag.com/uploads/sites/11/2020/07/2001-Acura-Integra-Type-R-lead-image.jpg"
                />
            <h3>{username}</h3>
            </div>

            <img
                className="post__image"
                alt="alt"
                src={imageUrl}
            />

            <h4 className="post__text">
                <strong>{username}:</strong> {caption}
            </h4>
        </div>
    );
}

export default Post;
