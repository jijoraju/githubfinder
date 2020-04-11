import React, { Component } from 'react';
import Spinner from '../layouts/Spinner';

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.username);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      url,
      html_url,
      login,
      followers,
      following,
      public_repos,
      public_gists,
      hirable,
    } = this.props.user;

    if (this.props.loading) {
      return <Spinner />;
    } else {
      return <div>{name}</div>;
    }
  }
}
