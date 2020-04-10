import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <User users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}
export default App;
