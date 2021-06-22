import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    
    console.log(props);

    return (
        <div className="ui relaxed divided list">
            {
                props.videos.map((video) => <VideoItem
                    key={video.id.videoId} 
                    imgUrl={video.snippet.thumbnails.default.url}
                    title={video.snippet.title} />)
            }
        </div>
    )
}

export default VideoList;