import React, {useEffect, useState } from 'react'
import './DevFeed.css';
import PostCard from './PostCard';
import {devInstance} from '../axios'
import ReactTimeAgo from 'react-time-ago'

function DevFeed({selectedCategory}) {

    const[feed, setFeed] = useState([]);

    const[date, setDate] = useState('');
    // didn't implement pagination cos posts are limited

    async function fetchDev(){
        const response = await devInstance.get(selectedCategory)
        // console.log(response.data)
        setFeed(response.data)
        return response
    }

    const handleScroll = (e) =>{
        var isBottom = Math.round(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight;    
        if(isBottom){
            console.log('bottom');

        }
    } 

    const dateSet = (date) =>{
        var pubDate = new Date(date)
        return pubDate
    }

    useEffect(() => {
        fetchDev();
    }, [selectedCategory])
    
    return (
        <div className = 'devFeed' onScroll={handleScroll}>
            {feed.map( (post) => (
                <PostCard
                    key = {post.id}
                    author = {`@${post.user.username}`}
                    title = {post.title}
                    time = {<ReactTimeAgo date={post.published_timestamp} locale="en-US"/>}
                    reactions = {post.public_reactions_count} 
                />
            ))}
        </div>
    )
}

export default DevFeed
