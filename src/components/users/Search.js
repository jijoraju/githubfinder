import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({ text: '' });
  };

  onReset = (e) => {
    e.preventDefault();
    this.props.resetUsers();
    this.setState({ text: '' });
  };

  render() {
    return (
      <form className='form' onSubmit={this.onSubmit} onReset={this.onReset}>
        <input
          type='text'
          name='text'
          placeholder='Search User here'
          value={this.state.text}
          onChange={this.onChange}
        />
        <input type='submit' className='btn btn-dark btn-block' />
        {this.props.showReset && (
          <input type='reset' className='btn btn-light btn-block' />
        )}
      </form>
    );
  }
}

export default Search;
