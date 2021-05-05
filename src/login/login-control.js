import React from "react";

export class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
        this.handleToggleLoggedIn = this.handleToggleLoggedIn.bind(this);
    }

    handleToggleLoggedIn() {
        this.setState(state => ({ isLoggedIn: !state.isLoggedIn }));
    }

    render() {
        const button = this.isLoggedIn ?
            <LogOutButton onClick={this.handleToggleLoggedIn}/> :
            <LogInButton onClick={this.handleToggleLoggedIn}/>;

        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {button}
            </div>
        );
    }
}

function Greeting(props) {
    if (props.isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }
    return <h1>Please sign in.</h1>;
}

function LogInButton(props) {
    return <button onClick={props.onClick}>Log in</button>;
}

function LogOutButton(props) {
    return <button onClick={props.onClick}>Log out</button>;
}
