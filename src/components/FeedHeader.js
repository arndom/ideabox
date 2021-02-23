import React from 'react';
import './FeedHeader.css';

function FeedHeader({title}) {
    return (
        <div className = 'feedHeader'>
            <h5>{title}</h5>
        </div>
    )
}

export default FeedHeader
