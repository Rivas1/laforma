import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import purple from '@material-ui/core/colors/purple';
import { StylesContext } from '@material-ui/styles/StylesProvider';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        const primary = purple.A400;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar 
                        title="Enter User Details"
                        color={this.primary}
                        />
                    <TextField 
                        hintText="Enter First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        />
                    <TextField 
                        hintText="Enter Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        />
                    <TextField 
                        hintText="Enter Email"
                        floatingLabelText="E-mail"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        />
                        <br/>
                    <RaisedButton
                        label="Next"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                        />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
