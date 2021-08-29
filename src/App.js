import React from 'react';
import GithubState from './context/github/GithubState';
import Repos from './components/Repos';
import './index.css';
import './Card.scss';

const App = () => {
  return (
    <GithubState>
      <div className='App'>
        Github Project
        <div className='container'>
          <Repos />
        </div>
      </div>
    </GithubState>
  );
};

export default App;
