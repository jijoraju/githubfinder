import React, { useReducer } from 'react';
import GithubReducer from './githubReducer';
import GithubContext from './githubContext';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  SET_USER,
  GET_REPOS,
} from '../types';
import axios from 'axios';

let githubclientId;
let githubclientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubclientId = process.env.REACT_APP_GITHUB_CLEINTID;
  githubclientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubclientId = process.env.GITHUB_CLEINTID;
  githubclientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUser = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&clientid=${githubclientId}&client_secret=${githubclientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?clientid=${githubclientId}&client_secret=${githubclientSecret}`
    );
    dispatch({
      type: SET_USER,
      payload: res.data,
    });
  };

  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&clientid=${githubclientId}&client_secret=${githubclientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  const resetUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        resetUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
