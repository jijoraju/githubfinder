import React, { Component } from 'react';

export class UserItem extends Component {
  state = {
    id: 'id',
    login: 'Jijo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/jijoraju'
  };
  render() {
    return (
      <div className='card text-center'>
        <img src={this.state.avatar_url} alt='' style={{ width: '60px' }} />
        <h3>{this.state.login}</h3>
        <a href={this.state.html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    );
  }
}

export default UserItem;
