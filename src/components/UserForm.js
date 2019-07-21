import React, { Component } from 'react';
import { FormUserDetails } from './FormUserDetails';
import { FormPersonalDetails } from './FormPersonalDetails';
import { Confirm } from './Confirm';

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
    };

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
                <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )

            case 3: return (
                <Confirm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
            )
            
            case 4: return (
                <h1> This is the success step (final)</h1>
            )
        }
    }
}

export default UserForm
