import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, html_url, login } }) => {
  return (
    <div className='card text-center'>
      <img src={avatar_url} alt='' style={{ width: '60px' }} />
      <h3>{login}</h3>
      <Link to={`/users/${login}`} className='btn btn-dark btn-sm my-1'>
        More
      </Link>
    </div>
  );
};

export default UserItem;
