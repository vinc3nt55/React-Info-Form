import React, { Component, PropTypes } from 'react';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class FromUserDetails extends Component {
	continue = e => {
		e.preventDefault();
        // Process Form //
		this.props.nextStep();
	};
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
    	const{ values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <MuiThemeProvider>
            	<React.Fragment>
            	<AppBar title="Confirm User Data" />
                <List style={ styles.centerText }>
                    <ListItem
                        primaryText="First Name"
                        secondaryText={firstName}
                    />
                     <ListItem
                        primaryText="Last Name"
                        secondaryText={lastName}
                    />
                     <ListItem
                        primaryText="Email"
                        secondaryText={email}
                    />
                    <ListItem
                        primaryText="Occupatio"
                        secondaryText={occupation}
                    />
                    <ListItem
                        primaryText="City"
                        secondaryText={city}
                    />
                    <ListItem
                        primaryText="Bio"
                        secondaryText={bio}
                    />
                </List>
                <br/>
                <div style={ styles.centerBtn }>
                	<RaisedButton
                		label="Confirm & Continue"
                		primary={true}
                		style={styles.button}
                		onClick={this.continue}
                	/>
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </div>
            	</React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const styles = {
	button: {
		margin: 15
	},
    centerText: {
        textAlign: 'center'
    },
    centerBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center'
    }

}
export default FromUserDetails;
