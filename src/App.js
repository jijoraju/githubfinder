import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?clientid=${process.env.REACT_APP_GITHUB_CLEINTID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  searchUser = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&clientid=${process.env.REACT_APP_GITHUB_CLEINTID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  resetUsers = () => {
    this.setState({ users: [] });
  };
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search
            searchUser={this.searchUser}
            resetUsers={this.resetUsers}
            showReset={this.state.users.length > 0 ? true : false}
          />
          <User users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}
export default App;
