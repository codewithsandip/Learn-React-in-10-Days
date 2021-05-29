import React, { Component } from 'react';

class SignUpForm extends Component {

    state = {
        username: '',
        password: '',
        passwordAgain: '',
        gender: '',
        city: null,
        terms: false
    }

    onFormValueChange = (fieldName, fieldValue) => {
        this.setState({
            [fieldName]: fieldValue
        });
    }

    onSignUp = (evt) => {
        evt.preventDefault();

        const payload = {...this.state};

        this.props.onSignUp(payload);
    }

    render() {
        return (
            <form className="ui form">
                <div className="field">
                    <label>Username/Email</label>
                    <input type="text" name="username"
                        placeholder="User Name"
                        value={this.state.username}
                        onChange={(e) => {
                            this.onFormValueChange('username', e.target.value);
                        }}
                    />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(e) => {
                            this.onFormValueChange('password', e.target.value);
                        }}
                        />
                </div>
                <div className="field">
                    <label>Re-type Password</label>
                    <input type="password" name="password"
                        placeholder="Password"
                        value={this.state.passwordAgain}
                        onChange={(e) => {
                            this.onFormValueChange('passwordAgain', e.target.value);
                        }}
                        />
                </div>
                <div className="grouped fields">
                    <label htmlFor="gender">Gender</label>
                    <div className="field">
                        <div className="ui radio checkbox"
                            onClick={() => {
                                this.onFormValueChange('gender', 'Female');
                            }}>
                            <input type="radio" name="gender" 
                                checked={this.state.gender === 'Female'} tabIndex="0" 
                                className="hidden" readOnly />
                            <label>Female</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox"
                            onClick={() => {
                                this.onFormValueChange('gender', 'Male');
                            }}>
                            <input type="radio" name="fruit" 
                                tabIndex="0" className="hidden"
                                checked={this.state.gender === 'Male'}
                                readOnly />
                            <label>Male</label>
                        </div>
                    </div>
                    <div className="field">
                        <label>City</label>
                        <select onChange={(e) => {
                            this.onFormValueChange('city', e.target.value);
                        }}>
                            <option value="">Select City</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </div>
                    <div className="field">
                        <div className="ui checkbox" onClick={() => {
                            this.onFormValueChange('terms', !this.state.terms);
                        }}>
                            <input type="checkbox" tabIndex="0" 
                                className="hidden" checked={this.state.terms}
                                readOnly />
                            <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    <div>
                        <button className="ui primary button"
                            onClick={this.onSignUp}>
                            Sign Up
                        </button>
                    </div>
                    <div style={{marginTop: '5px'}}>
                        Exiting User?
                        <button className="ui positive basic button"
                            style={{marginLeft: '5px'}}
                            onClick={this.props.onToggleSignIn}>
                            Sign In
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SignUpForm;