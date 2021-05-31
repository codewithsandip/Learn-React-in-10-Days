import React from 'react';

class Search extends React.Component {

    state = {
        value: ''
    }

    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        const styles = {
            padding: '10px'
        }
    
        return (
            <div className="ui fluid action input" style={styles}>
                <input ref={this.inputRef} id="searchEl" type="text" 
                    placeholder="Search..."
                    value={this.state.value}
                    onChange={(e) => this.setState({
                        value: e.target.value
                    })} />
                <div className="ui button"
                    onClick={() => {
                        this.props.onSearch(this.state.value)
                    }}>
                    Add Github User
                </div>
            </div>
        );
    }
}

export default Search;