import React, { Component } from 'react';

export class UserItem extends Component {
  render() {
    return (
      <div className='card text-center'>
        <img
          src={this.props.user.avatar_url}
          alt=''
          style={{ width: '60px' }}
        />
        <h3>{this.props.user.login}</h3>
        <a href={this.props.user.html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    );
  }
}

export default UserItem;
