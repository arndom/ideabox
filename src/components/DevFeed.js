import React, {useEffect, useState } from 'react'
import './DevFeed.css';
import PostCard from './PostCard';
import {devInstance} from '../axios'


function DevFeed({selectedCategory}) {

    const[feed, setFeed] = useState([]);

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

    useEffect(() => {
        fetchDev();
    }, [selectedCategory])
    
    return (
        <div className = 'devFeed' onScroll={handleScroll}>
            {feed.map( (post) => (
                <PostCard key = {post.id} author = {`@${post.user.username}`} title = {post.title} time = '' reactions = {post.public_reactions_count} />
            ))}
        </div>
    )
}

export default DevFeed
