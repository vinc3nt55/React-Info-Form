import React, { Component, PropTypes } from 'react';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


class Success extends Component {
    reset = e => {
        e.preventDefault();
        this.props.reset();
    }
    render() {
        return (
            <MuiThemeProvider>
            	<React.Fragment>
            	<AppBar title="Success" />
                    <div style={ styles.centerText }>
                        <h1>Thank you for Testing this Form</h1>
                        <p>Hope you like this little Demo about form using React and Material-ui</p>
            	   </div>
                <RaisedButton
                    label="Back"
                    secondary={true}
                    style={styles.button}
                    onClick={this.reset}
                />
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
        textTransform: 'uppercase',
        textAlign: 'center',
        backgroundColor: '#f3f3f3',
        fontFamily: 'Ariel, Helvetica, sans-serif',
        height: '50vh',
        padding: '5rem 3rem 3rem 3rem'
    }
}
export default Success;