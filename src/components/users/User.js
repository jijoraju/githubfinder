import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';
import { Repos } from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUserRepos, repos, user, getUser, loading } = githubContext;

  useEffect(() => {
    getUser(match.params.username);
    getUserRepos(match.params.username);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    html_url,
    login,
    followers,
    following,
    public_repos,
    public_gists,
    hirable,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hirable{' '}
        {hirable ? (
          <i
            className='fa fa-check'
            aria-hidden='true'
            style={{ color: 'green' }}
          ></i>
        ) : (
          <i
            className='fa fa-times-circle'
            aria-hidden='true'
            style={{ color: 'red' }}
          ></i>
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt=''
              className='round-img'
              style={{ width: '150px' }}
            />
            <h2>{name}</h2>
            {location && <p>Location: {location}</p>}
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Github profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Webiste: </strong>
                    {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-light'>Following: {following}</div>
          <div className='badge badge-success'>
            Public Repos: {public_repos}
          </div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};

export default User;
