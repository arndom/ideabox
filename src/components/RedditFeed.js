import React, { useEffect, useLayoutEffect, useState } from 'react';
import PostCard from './PostCard';
import './RedditFeed.css'; 
import {redditInstance} from '../axios';
import ReactTimeAgo from 'react-time-ago';


function RedditFeed({selectedCategory, selectedFeed, setSelectedFeed}) {
    
    const[feed, setFeed] = useState([]);
    // reddit paginationon
    const[after, setAfter] = useState('');
    // for scroll
    const[bottom, setBottom] = useState(false)

    async function fetchReddit(){
        const response = await redditInstance.get(selectedCategory+after) 
        setAfter(response.data.data.after)
        // setFeed(response.data.data.children.map( (item) => item.data))
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
        // console.log(Math.round(e.target.scrollHeight - e.target.scrollTop))
        if(isBottom){
            // console.log("at the bottom")
            setBottom(true)
        }else{
            setBottom(false)
        }
    } 

    useEffect(() => {

        fetchReddit()
        // console.log(feed)
        // console.log(selectedFeed)
        if(bottom){
            fetchReddit()
        }
        // clear feed and after when category changes
        if(selectedFeed){
            // setFeed([])
            setAfter('')
        }
        // console.log(selectedFeed)
    },[selectedCategory, bottom, selectedFeed])

    return (
        <div className = 'redditFeed' onScroll = {handleScroll}>
            {feed.map( (post) => {
                // convert unix time
               var rTime = new Date(post.created_utc*1000).toISOString();
                // console.log(post.url)
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

export default RedditFeed
