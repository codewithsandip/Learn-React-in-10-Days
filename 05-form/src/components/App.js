import React, { Component } from 'react';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class App extends Component {

    state = {
        toggleSignIn: true
    }

    handleSignIn = (payload) => {
        // server side communication
        console.log('sign in: ', payload);
    }
 
     handleSignUp = (payload) => {
         // server communication
         console.log('sign up: ', payload);
     }

     onToggleSignIn = (e) => {
        e.preventDefault();
        this.setState({
            toggleSignIn: !this.state.toggleSignIn
        });
     }

    render() {
        return (
            <div className="ui raised text container segment">
                {
                    this.state.toggleSignIn ?
                        <SignInForm onSignIn={this.handleSignIn}
                            onToggleSignIn={this.onToggleSignIn} /> :
                        <SignUpForm onSignUp={this.handleSignUp}
                            onToggleSignIn={this.onToggleSignIn} />
                }
            </div>
        );
    }
}

export default App;