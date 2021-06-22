import React from 'react';
import VideoSearch from './VideoSearch';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import youtube from '../api/youtube';

class App extends React.Component {

    state = {
        videos: []
    }

    onSearch = async (term) => {
        const response = await youtube.get('/search', { params: { q: term } });
        this.setState({
            videos: response.data.items
        });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    <VideoSearch onSearch={this.onSearch} />
                </div>
                <div>
                    <div>
                        <VideoPlayer />
                    </div>
                    <div>
                        <VideoList videos={this.state.videos} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;