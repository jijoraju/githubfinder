import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <User />
        </div>
      </div>
    );
  }
}
export default App;
