import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List'
import Button from '@material-ui/core/Button';
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
                        <ListItem 
                            primaryText="Age"
                            secondaryText={ age }
                        />
                        <ListItem 
                            primaryText="Email"
                            secondaryText={ city }
                        />
                        <ListItem 
                            primaryText="Occupation"
                            secondaryText={ occupation }
                        />
                    </List>
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
    }
}

export default Confirm
