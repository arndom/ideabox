import React, {useEffect, useState } from 'react'
import './DevFeed.css';
import PostCard from './PostCard';
import {devInstance} from '../axios'


function DevFeed({selectedCategory}) {

    const[feed, setFeed] = useState([]);

    async function fetchDev(){
        const response = await devInstance.get(selectedCategory[1])
        console.log(response.data)
        setFeed(response.data)
        return response
    }

    useEffect(() => {
        console.log(selectedCategory[1])
        fetchDev()
        // console.log(feed)
    }, [selectedCategory])
    
    return (
        <div className = 'devFeed'>
            {feed.map( (post) => (
                <PostCard key = {post.id} author = {`@${post.user.username}`} title = {post.title} time = '' reactions = {post.public_reactions_count} />
            ))}
        </div>
    )
}

export default DevFeed
