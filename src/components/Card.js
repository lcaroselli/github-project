import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination';
import '../Card.scss';

const Card = ({ name, stars, url, full_name }) => {
  const [toggle, setToggle] = useState(false);
  const [loadingCommits, setLoadingCommits] = useState(false);
  const [commits, setCommits] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [commitsPerPage] = useState(5);

  // Get current commits
  const indexOfLastCommit = currentPage * commitsPerPage;
  const indexOfFirstCommit = indexOfLastCommit - commitsPerPage;

  // should slice out the number of commits we want, which should be 5
  const currentCommits = commits.slice(indexOfFirstCommit, indexOfLastCommit);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleCommits = async () => {
    if (!toggle) {
      setToggle(true);
      setLoadingCommits(true);

      const currentDate = new Date();
      const yesterday = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
      const yesterdayISOString = yesterday.toISOString();

      await axios
        .get(
          `https://api.github.com/repos/${full_name}/commits?since=${yesterdayISOString}`
        )
        .then((response) => setCommits(response.data))
        .catch((error) => setErrorMessage(error.message));

      setLoadingCommits(false);
    } else {
      setToggle(false);
      setLoadingCommits(false);
      setCommits([]);
    }
  };

  const commitCardInfo = () =>
    currentCommits.map((commit) => (
      <div className='commit__container'>
        <h3>Author:</h3>
        <p className='card__description'>{commit.commit.author.name}</p>
        <h3>Date Committed:</h3>
        <p className='card__description'>{commit.commit.author.date}</p>
        <h3>Commit Message:</h3>
        <p className='card__description'>{commit.commit.message}</p>
      </div>
    ));

  const repoCardInfo = () => (
    <Fragment>
      <h2>Repository Information</h2>
      <h3>Name:</h3>
      <p className='card__description'>{name}</p>
      <h3>URL:</h3>
      <p className='card__description'>{url}</p>
      <h3>Stars:</h3>
      <p className='card__description'>{stars}</p>
    </Fragment>
  );

  return (
    <div className='card'>
      <div className='card__body'>
        {!toggle && repoCardInfo()}
        {toggle && (
          <Fragment>
            <h2>
              Commits last 24 Hours to <span className='name-span'>{name}</span>
            </h2>
            {errorMessage && <div>{errorMessage}</div>}
            {loadingCommits && <div>Loading Commits...</div>}
            {commits.length >= 1 && !loadingCommits && (
              <Fragment>
                {commitCardInfo()}
                <Pagination
                  commitsPerPage={commitsPerPage}
                  totalCommits={commits.length}
                  paginate={paginate}
                />
              </Fragment>
            )}
            {!loadingCommits && !errorMessage && commits.length <= 0 && (
              <div>No Commits last 24 hours</div>
            )}
          </Fragment>
        )}
        <div className='card__btn-container'>
          <button className='card__btn' onClick={toggleCommits}>
            Flip Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
