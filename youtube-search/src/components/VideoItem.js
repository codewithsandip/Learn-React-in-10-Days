import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {
    return (
        <div className="video-item item">
            <img src={props.imgUrl} className="ui small image" />
            <div className="content">
                <div className="header">
                    {props.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;