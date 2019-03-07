import React, { Component, PropTypes } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';


class UserForm extends Component {
   state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    };

    // Proceed to nest step
    nextStep = () => {
    	const { step } = this.state;
    	this.setState({
    		step: step + 1
    	});
    };
     // Go back to prev step
    prevStep = () => {
    	const { step } = this.state;
    	this.setState({
    		step: step - 1
    	});
    };
    // Success Back Button
    reset = e => {
      const { step } = this.state
      this.setState({
        step: step - 3
      });
    };
     // Handle fields change
    handleChange = input => e => {
    	this.setState({[input]: e.target.value});
    };
    render() {
    	const { step } = this.state;
    	const { firstName, lastName, email, occupation, city, bio } = this.state;
    	const values = { firstName, lastName, email, occupation, city, bio }
      	switch(step) {
      		case 1:
      			return (
      				<FormUserDetails 
                styles={ styles.centerItems }
      					nextStep={this.nextStep}
      					handleChange={this.handleChange}
      					values={values}
      				/>
      			)
      		case 2:
      			return (
              <FormPersonalDetails 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            )
      		case 3:
      			return (
              <Confirm 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
              />
            )
      		case 4:
      			return (
              <Success
                reset={this.reset}
                values={values}
              />
            )
      	}
    }
}
const styles = {
  centerItems: {
    width: '100%',
    hieght: '100vh',
    display: 'flex',
    justufyContent: 'center',
    alignItem: 'center'
  }
}
export default UserForm;
