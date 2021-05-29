import React from 'react';

class SignInForm extends React.Component {

    state = {
        username: '',
        password: ''
    }

    onFormValueChange = (fieldName, fieldValue) => {
        this.setState({
            [fieldName]: fieldValue
        });
    }

    onSignIn = (evt) => {
        evt.preventDefault();

        const payload = {...this.state};

        this.props.onSignIn(payload);
    }

    render() {
        return (
            <form className="ui form">
                <div className="field">
                    <label>Username/Email</label>
                    <input type="text" name="username"
                        placeholder="User Name"
                        value={this.state.username}
                        onChange={(evt) => {
                            this.onFormValueChange('username', evt.target.value);
                        }} />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(evt) => {
                            this.onFormValueChange('password', evt.target.value);
                        }} />
                </div>
                <div>
                    <button className="ui primary button"
                        onClick={this.onSignIn}>
                        Sign In
                    </button>
                </div>
                <div style={{marginTop: '5px'}}>
                    New User?
                    <button className="ui positive basic button"
                        style={{marginLeft: '5px'}}
                        onClick={this.props.onToggleSignIn}>
                        Sign Up
                    </button>
                </div>
            </form>
        )
    }

}

export default SignInForm;