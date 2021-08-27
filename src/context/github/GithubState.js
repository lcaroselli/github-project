import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import { GET_REPOS } from '../types';

const GithubState = (props) => {
  const initialState = {
    error: null,
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get Repos
  const getRepos = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=stars:>1&sort=stars&per_page=100`
      )
      .then((response) => dispatch({ type: GET_REPOS, payload: response.data }))
      .catch((error) =>
        dispatch({ type: GET_REPOS, payload: [], error: error.message })
      );
  };

  return (
    <githubContext.Provider
      value={{
        error: state.error,
        repos: state.repos,
        getRepos,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
