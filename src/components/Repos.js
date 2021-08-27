import React, { Fragment, useContext, useEffect } from 'react';
import Card from './Card';
import githubContext from '../context/github/githubContext';

const Repos = () => {
  const GithubContext = useContext(githubContext);

  const { error, getRepos, repos } = GithubContext;

  useEffect(() => {
    getRepos();
    // eslint-disable-next-line
  }, []);

  const repoCards = repos.items ? (
    repos.items.map((repo) => {
      return (
        <Fragment key={repo.id}>
          <Card
            full_name={repo.full_name}
            repoId={repo.id}
            key={repo.id}
            name={repo.name}
            stars={repo.stargazers_count}
            type={'repo'}
            url={repo.html_url}
          />
        </Fragment>
      );
    })
  ) : (
    <div>Loading...</div>
  );

  return error ? (
    <Fragment>{error}</Fragment>
  ) : (
    <Fragment>{repoCards}</Fragment>
  );
};

export default Repos;
