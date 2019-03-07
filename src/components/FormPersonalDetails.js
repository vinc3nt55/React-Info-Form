import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FromPersonalDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        // console.log(this.prevStep)
    	const{ values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
            	<React.Fragment>
            	<AppBar title="Enter Personal Details" />
                    <div style={ styles.centerItem } >
                    	<TextField  
                    		hintText="Enter Your Occupation"
                    		floatingLabelText="Occupation"
                    		onChange={handleChange('occupation')}
                    		defaultValue={values.occupation}
                    	/>
                    </div>
                	<br/>
                    <div style={ styles.centerItem } >
                    	<TextField  
                    		hintText="Enter Your City"
                    		floatingLabelText="City"
                    		onChange={handleChange('city')}
                    		defaultValue={values.city}
                    	/>
                    </div>
                	<br/>
                	<div style={ styles.centerItem } >
                        <TextField  
                    		hintText="Enter Your Bio"
                    		floatingLabelText="Bio"
                    		onChange={handleChange('bio')}
                    		defaultValue={values.bio}
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
    centerItem: {
        display: 'flex',
        justifyContent: 'center'
    }
}
export default FromPersonalDetails;
