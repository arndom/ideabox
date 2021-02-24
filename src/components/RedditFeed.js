import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import './RedditFeed.css'; 
import {redditInstance} from '../axios'

function RedditFeed({selectedCategory}) {
    
    const[feed, setFeed] = useState([]);

    async function fetchReddit(){
        const response = await redditInstance.get(selectedCategory[0])
        console.log(response.data.data.children.map( (item) => item.data))
        setFeed(response.data.data.children.map( (item) => item.data))
        return response
    }

    useEffect(() => {
        console.log(selectedCategory[0])
        fetchReddit()
        // console.log(feed)
    }, [selectedCategory])

    return (
        <div className = 'redditFeed'>
            {feed.map( (post) => (
                <PostCard key = {post.id} author = {`@${post.author}`} time ='' title = {post.title} reactions = {post.ups} />
            ))}
        </div>
    )
}

export default RedditFeed
