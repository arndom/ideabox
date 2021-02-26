import React from 'react';
import './FeedHeader.css';

function FeedHeader({title, subTitle}) {
    return (
        <div className = 'feedHeader'>
            <h4>{title}</h4>
            <p>{subTitle}</p>
        </div>
    )
}

export default FeedHeader
