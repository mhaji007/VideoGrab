import React from 'react';
import VideoItem from './VideoItem'

const VideoList =  ({videos}) => {
    
   const renderendList = videos.map((video) => {

        return <VideoItem video={video}/>;
    });
    return <div>{renderendList}</div>;
}

export default VideoList;