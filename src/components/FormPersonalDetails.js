import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import purple from '@material-ui/core/colors/purple';
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
        const primary = purple.A400;
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
                        />
                    <TextField 
                        hintText="Enter City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                        />
                    <TextField 
                        hintText="Enter Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                        />
                        <br/>
                    <RaisedButton
                        label="Previous"
                        secondary={true}
                        style={styles.button}
                        onClick={this.previous}
                    />
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

export default FormPersonalDetails
