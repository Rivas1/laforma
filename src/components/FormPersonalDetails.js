import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import { StylesContext } from '@material-ui/styles/StylesProvider';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar 
                        title="Enter Personal Details"
                        color={this.primary}
                        />
                    <TextField 
                        hintText="Enter Age"
                        floatingLabelText="Age"
                        onChange={handleChange('age')}
                        defaultValue={values.age}
                        style={styles.textfield}
                        />
                    <TextField 
                        hintText="Enter City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                        style={styles.textfield}
                        />
                    <TextField 
                        hintText="Enter Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                        style={styles.textfield}
                        />
                        <br/>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={this.previous} 
                        style={styles.button}
                        >
                        Previous
                    </Button>
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

export default FormPersonalDetails
