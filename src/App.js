import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import axios from 'axios';
import Search from './components/users/Search';
import { Alert } from './components/layouts/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './components/pages/About';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
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

  alertUser = (msg, type) => {
    console.log(this.state);
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
    console.log(this.state.alert);
  };
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUser={this.searchUser}
                      resetUsers={this.resetUsers}
                      showReset={this.state.users.length > 0 ? true : false}
                      alertUser={this.alertUser}
                    />
                    <User
                      users={this.state.users}
                      loading={this.state.loading}
                    />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
