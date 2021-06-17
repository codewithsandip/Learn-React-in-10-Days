import React from 'react';
import VideoSearch from './VideoSearch';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

const App = () => {
    return (
        <div className="ui container">
            <div>
                <VideoSearch />
            </div>
            <div>
                <div>
                    <VideoPlayer />
                </div>
                <div>
                    <VideoList />
                </div>
            </div>
        </div>
    )
}

export default App;