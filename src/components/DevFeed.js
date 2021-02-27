import React, {useEffect, useState } from 'react'
import './DevFeed.css';
import PostCard from './PostCard';
import {devInstance} from '../axios'
import ReactTimeAgo from 'react-time-ago'

function DevFeed({selectedCategory}) {

    const[feed, setFeed] = useState([]);

    const[date, setDate] = useState('');

    // couldn't implement pagination because #ideas posts are limited
    const endPost = [{
        "user": {
            "username": "_dev"
        },
        "title": "You've reached the end, why not contribute ➕👈",
        "public_reactions_count": '1',
        "url": '#'
    }]

    async function fetchDev(){
        const response = await devInstance.get(selectedCategory)
        setFeed((response.data).concat(endPost))
        return response
    }

    const handleScroll = (e) =>{
        var isBottom = Math.round(e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight;    
        if(isBottom){
            console.log('bottom');
        }
    } 

    const dateSet = (date) =>{
        var pubDate = new Date(date)
        return pubDate
    }

    useEffect(() => {
            console.log(feed)
            fetchDev();
    }, [selectedCategory])
    
    return (
        <div className = 'devFeed' onScroll={handleScroll}>
            {feed.map( (post) => (
                <PostCard
                    key = {post.id}
                    author = {(post.user) && `@${post.user.username}`}
                    title = {post.title}
                    time = {(post.published_timestamp) && <ReactTimeAgo date={post.published_timestamp} locale="en-US"/>}
                    reactions = {post.public_reactions_count} 
                    link = {post.url}
                />
            ))}
        </div>
    )
}

export default DevFeed
