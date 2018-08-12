import React, {Component} from 'react';

class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Form has been submitted. The new user has been created with next personal data: ' +
            'first name is', this.state.firstName + ', last name is', this.state.lastName + ', email is',
            this.state.email + ', password is', this.state.password);
    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="First name"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                />
                <input
                    type="text"
                    placeholder="Last name"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <input
                    type="text"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
                <button>Submit</button>
            </form>
        );
    }
}

export default Authorization;