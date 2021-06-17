import React from 'react';
import VideoItem from './VideoItem';

const VideoList = () => {
    return (
        <div className="ui relaxed divided list">
            <VideoItem imgUrl="https://picsum.photos/200"
                title="Black Cat" />
            <VideoItem imgUrl="https://picsum.photos/200"
                title="Smiling Cat" />
            <VideoItem imgUrl="https://picsum.photos/200"
                title="Unique Cat" />
        </div>
    )
}

export default VideoList;