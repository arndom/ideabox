import React from 'react';
import DevFeed from './DevFeed';
import './Feed.css';
import FeedHeader from './FeedHeader';
import RedditFeedI from './RedditFeedI';
import RedditFeed from './RedditFeed';

function Feed({selectedCategory, selectedFeed, setSelectedFeed}) {

    return (
        <div className = 'feed'>
            
            {/* reddit feed container */}
            <div className = 'feed__reddit'>
                <FeedHeader title = 'Reddit' subTitle = 'r/AppIdeas'/>
                <RedditFeed selectedCategory = {selectedCategory[0]} selectedFeed = {selectedFeed} setSelectedFeed={setSelectedFeed}/>
            </div>

            {/* dev.to feed container */}
            <div className = 'feed__dev'>
                <FeedHeader title = 'Dev.to' subTitle = '#ideas'/>
                <DevFeed selectedCategory = {selectedCategory[1]}/>
            </div>
            
            {/* hashnode feed container */}
            <div className = 'feed__redditI'>
                <FeedHeader title = 'Reddit' subTitle = 'r/Startup_Ideas'/>
                <RedditFeedI selectedCategory = {selectedCategory[0]} selectedFeed = {selectedFeed} setSelectedFeed={setSelectedFeed}/>
            </div>

        </div>
    )
}

export default Feed
