import React, { Component, PropTypes } from 'react';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FromUserDetails extends Component {
	continue = e => {
		e.preventDefault();
        // Process //
		this.props.nextStep();
	}
    render() {
    	const{ values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
            	<React.Fragment>
            	<AppBar title="Enter User Details" />
                    <div style={ styles.centerItem } >
                    	<TextField
                    		hintText="Enter Your First Name"
                    		floatingLabelText="Frist Name"
                    		onChange={handleChange('firstName')}
                    		defaultValue={values.lastName}
                    	/>
                    </div>
            	<br/>
                    <div style={ styles.centerItem } >
                	   <TextField  
                    		hintText="Enter Your Last Name"
                    		floatingLabelText="Last Name"
                    		onChange={handleChange('lastName')}
                    		defaultValue={values.lastName}
                	   />
                    </div>
            	<br/>
                    <div style={ styles.centerItem } >
                    	<TextField  
                    		hintText="Enter Your Email"
                    		floatingLabelText="Email"
                    		onChange={handleChange('email')}
                    		defaultValue={values.email}
                    	/>
                    </div>
            	<br/>
                <div style={ styles.centerItem } >
                	<RaisedButton
                		label="Continue"
                		primary={true}
                		style={styles.button}
                		onClick={this.continue}
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
    centerItem: {
        display: 'flex',
        justifyContent: 'center'
    }
}
export default FromUserDetails;
