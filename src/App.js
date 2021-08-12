import React from 'react';
import GithubState from './context/github/GithubState';
import Repos from './components/Repos';
import './index.css';

const App = () => {
  return (
    <GithubState>
      <div className='App'>
        <div className='container'>Github Project</div>
        <Repos />
      </div>
    </GithubState>
  );
};

export default App;
