import React from 'react';

class VideoSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }

        
    }

    onSearchTermChange = (evt) => {
        const term = evt.target.value;

        this.setState({
            searchTerm: term
        });
    }

    onSubmit = async (evt) => {
        evt.preventDefault();
        this.props.onSearch(this.state.searchTerm);
    }

    render() {
        return (
            <div>
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <input value={this.state.searchTerm} type="text" 
                            placeholder="Search videos..."
                            onChange={this.onSearchTermChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default VideoSearch;