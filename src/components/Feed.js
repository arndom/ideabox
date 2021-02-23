import React from 'react';
import DevFeed from './DevFeed';
import './Feed.css';
import FeedHeader from './FeedHeader';
import HashFeed from './HashFeed';
import RedditFeed from './RedditFeed';

function Feed({selectedCategory}) {

    return (
        <div className = 'feed'>
            
            {/* reddit feed container */}
            <div className = 'feed__reddit'>
                <FeedHeader title = 'Reddit  r/AppIdeas'/>
                <RedditFeed/>
            </div>

            {/* dev.to feed container */}
            <div className = 'feed__dev'>
                <FeedHeader title = 'Dev.to  #ideas'/>
                <DevFeed/>
            </div>
            
            {/* hashnode feed container */}
            <div className = 'feed__hash'>
                <FeedHeader title = 'Hashnode  #ideas'/>
                <HashFeed/>
            </div>

        </div>
    )
}

export default Feed
