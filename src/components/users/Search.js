import React, { useState, useContext } from 'react';
import GithubContext from './../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const { users, resetUsers, searchUser } = githubContext;
  const { alertUser } = alertContext;

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '' || text === undefined) {
      alertUser('Enter something to search', 'light');
    } else {
      searchUser(text);
      setText('');
    }
  };

  const onReset = (e) => {
    e.preventDefault();
    resetUsers();
    setText('');
  };

  return (
    <form className='form' onSubmit={onSubmit} onReset={onReset}>
      <input
        type='text'
        name='text'
        placeholder='Search User here'
        value={text}
        onChange={onChange}
      />
      <input type='submit' className='btn btn-dark btn-block' />
      {users.length > 0 && (
        <input type='reset' className='btn btn-light btn-block' />
      )}
    </form>
  );
};

export default Search;
