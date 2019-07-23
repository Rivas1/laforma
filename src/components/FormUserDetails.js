import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
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
                        style={styles.textfield}
                        />
                    <TextField 
                        hintText="Enter Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        style={styles.textfield}
                        />
                    <TextField 
                        hintText="Enter Email"
                        floatingLabelText="E-mail"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        style={styles.textfield}
                        />
                        <br/>

                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={this.continue} 
                        style={styles.button}
                    >
                        Next
                    </Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    },
    textfield: {
        margin: 15
    }
}

export default FormUserDetails
