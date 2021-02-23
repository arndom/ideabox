import React, { forwardRef } from 'react';
import '/PostCard.css';

const  PostCard = forwardRef( ({author, photo, title}, ref) => {
    return (
        <div ref = {ref} className = 'postCard'>
            
        </div>
    )
})

export default PostCard
