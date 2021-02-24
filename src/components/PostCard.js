import React, { forwardRef } from 'react';
import './PostCard.css';

const  PostCard = forwardRef( ({author, time, title, reactions}, ref) => {
    return (
        <div ref = {ref} className = 'postCard'>
            <div className = 'postCard__heading'>
                <p>
                    {`🎶  ${author}`}
                    {time}
                </p>
            </div>
            <div className = 'postCard__subText'>
                <p>{title}</p>
                <p>{reactions}</p>
            </div>
        </div>
    )
})

export default PostCard
