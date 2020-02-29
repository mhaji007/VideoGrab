import React from 'react';
import VideoItem from './VideoItem'

const VideoList =  ({videos}) => {
    
   const renderendList = videos.map((video) => {

        return <VideoItem video={video}/>;
    });
    return <div className="ui relaxed divided list">{renderendList}</div>;
}

export default VideoList;