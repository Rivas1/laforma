import React, { Component } from 'react';
import { FormUserDetails } from './FormUserDetails';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        city: '',
        occupation: ''
    }
    // Go to next step in form
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to previous step in form
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle updating user input like name, email, etc.
    handleChange = input => e => {
        this.setState({ [input]: e.target.value});
    }
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, age, city, occupation } = this.state;
        const values = { firstName, lastName, email, age, city, occupation };
        
        switch (step) {
            case 1: return (
                <FormUserDetails 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
            case 2: return (
                <h1>This is the 2nd step of the form</h1>
            )

            case 3: return (
                <h1> This is the confirm step </h1>
            )
            
            case 4: return (
                <h1> This is the success step (final)</h1>
            )
        }
    }
}

export default UserForm
