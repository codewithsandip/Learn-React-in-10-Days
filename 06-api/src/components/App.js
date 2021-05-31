import React from 'react';
import axios from 'axios';

import Search from './Search';
import CardList from './CardList';

import github from '../utils/github';

class App extends React.Component {

    state = {
        users: []
    }

    onSearch = async (term) => {
        const response = await 
            github.get(`/users/${term}`);

        this.setState({
            users: [...this.state.users, response.data]
        })
    }

    render() {
        return (
            <div>
                <Search onSearch={this.onSearch} />
                <CardList users={this.state.users} />
            </div>
        )
    }
}

export default App;