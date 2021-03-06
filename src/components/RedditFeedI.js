import React, { useEffect, useLayoutEffect, useState } from 'react';
import PostCard from './PostCard';
import './RedditFeedI.css'; 
import {redditInstanceI} from '../axios';
import ReactTimeAgo from 'react-time-ago';

function RedditFeedI({selectedCategory, selectedFeed, setSelectedFeed}) {

    const[feed, setFeed] = useState([]);

    // reddit paginationon
    const[after, setAfter] = useState('');

    // for scroll
    const[bottom, setBottom] = useState(false)

    async function fetchReddit(){
        const response = await redditInstanceI.get(selectedCategory+after) 
        setAfter(response.data.data.after)

        if(selectedFeed){
            setFeed([])
            setFeed([].concat(response.data.data.children.map( (item) => item.data)))
        }else{
            setFeed([...feed].concat(response.data.data.children.map( (item) => item.data)))        
        }
        
        setSelectedFeed(false)
        return response
    }

    // for pagination
    const handleScroll = (e) =>{
        var isBottom = Math.round(e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight;
        if(isBottom){
            setBottom(true)
        }else{
            setBottom(false)
        }
    } 

    useEffect(() => {

        fetchReddit()

        if(bottom){
            fetchReddit()
        }

        // clear after when category changes
        if(selectedFeed){
            setAfter('')
        }

    },[selectedCategory, bottom, selectedFeed])

    return (
        <div className = 'redditFeedI' onScroll={handleScroll}>
            {feed.map( (post) => {

                // convert unix time
                var rTime = new Date(post.created_utc*1000).toISOString();

                return (
                <PostCard
                    key = {post.id}
                    author = {`@${post.author}`}
                    time = {<ReactTimeAgo date={rTime} locale="en-US"/>}
                    title = {post.title}
                    reactions = {post.ups}
                    link ={post.url}
                />
                )

            })}
        </div>
    )
}

export default RedditFeedI
