import { GET_REPOS } from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };

    default:
      return state;
  }
};
