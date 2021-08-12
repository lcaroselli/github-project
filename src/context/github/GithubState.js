import React, { useReducer } from "react";
import axios from "axios";
import githubContext from "./githubContext";
import githubReducer from "./githubReducer";
import { GET_REPOS } from "../types";

const GithubState = (props) => {
  const initialState = {
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get Repos
  const getRepos = async () => {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=stars:>1&sort=stars`
    );
    dispatch({
      type: GET_REPOS,
      payload: response.data,
    });
  };

  return (
    <githubContext.Provider
      value={{
        repos: state.repos,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
