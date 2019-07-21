import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton';
import purple from '@material-ui/core/colors/purple';
import { StylesContext } from '@material-ui/styles/StylesProvider';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {firstName, lastName, email, occupation, age, city } } = this.props;
        const primary = purple.A400;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar 
                        title="Confirm Details"
                        color={this.primary}
                        />
                    <List>
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={ firstName }
                        />
                        <ListItem 
                            primaryText="Last Name"
                            secondaryText={ lastName }
                        />
                        <ListItem 
                            primaryText="Email"
                            secondaryText={ email }
                        />
                    </List>
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

export default Confirm
