import React, { forwardRef } from 'react';
import './PostCard.css';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import TextTruncate from 'react-text-truncate';

const  PostCard = forwardRef( ({author, time, title, reactions, link}, ref) => {
    return (
        <div ref = {ref} className = 'postCard'>
            <div className = 'postCard__heading'>
                <p>{author}</p>
                <p>{time}</p>
            </div>
            <div className = 'postCard__subText'>
                <a href = {link} target = "_blank">
                    <TextTruncate
                        line={2}
                        element='h5'
                        truncateText='...'
                        text={title}

                    />
                </a>                
                <p><StarOutlineIcon/>{reactions}</p>
            </div>
        </div>
    )
})

export default PostCard
