import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';

class App extends Component {
  render() {
    return (
      <div className="App" style={ styles.contentWidth }>
        <UserForm  />
      </div>
    );
  }
}
const styles = {
	contentWidth: {
		width: '70%',
		margin: '0 auto'
	}
}
export default App;
