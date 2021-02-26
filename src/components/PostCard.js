import React, { forwardRef } from 'react';
import './PostCard.css';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import TextTruncate from 'react-text-truncate';

const  PostCard = forwardRef( ({author, time, title, reactions}, ref) => {
    return (
        <div ref = {ref} className = 'postCard'>
            <div className = 'postCard__heading'>
                <p>
                    {author}
                    {time}
                </p>
            </div>
            <div className = 'postCard__subText'>
                <TextTruncate
                    line={2}
                    element='h5'
                    truncateText='...'
                    text={title}
                />
                <p><StarOutlineIcon/>{reactions}</p>
            </div>
        </div>
    )
})

export default PostCard
