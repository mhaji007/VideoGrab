import React from 'react';
import VideoItem from './VideoItem'

const VideoList =  ({videos}) => {
    
   const renderendList = videos.map((video) => {

        return <VideoItem/>;
    });
    return <div>{renderendList}</div>;
}

export default VideoList;