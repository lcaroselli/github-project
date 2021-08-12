import React, { Fragment, useState } from "react";
import axios from "axios";
import "../Card.scss";

const Card = ({ name, stars, url, full_name }) => {
  const [toggle, setToggle] = useState(false);
  const [loadingCommits, setLoadingCommits] = useState(false);
  const [commits, setCommits] = useState([]);

  const toggleCommits = async () => {
    if (!toggle) {
      setToggle(true);
      setLoadingCommits(true);

      const currentDate = new Date();
      const yesterday = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
      const yesterdayISOString = yesterday.toISOString();

      const response = await axios.get(
        `https://api.github.com/repos/${full_name}/commits?since=${yesterdayISOString}`
      );

      setCommits(response.data);
      setLoadingCommits(false);
    } else {
      setToggle(false);
      setLoadingCommits(false);
      setCommits([]);
    }
  };

  const commitCardInfo = () =>
    commits.map((commit) => (
      <div className="commit__container">
        <h3>Author:</h3>
        <p className="card__title">{commit.commit.author.name}</p>
        <h3>Date Committed:</h3>
        <p className="card__description">{commit.commit.author.date}</p>
        <h3>Commit Message:</h3>
        <p className="card__description">{commit.commit.message}</p>
      </div>
    ));

  const repoCardInfo = () => (
    <Fragment>
      <h2>Repository Information</h2>
      <h3>Name:</h3>
      <p className="card__title">{name}</p>
      <h3>URL:</h3>
      <p className="card__description">{url}</p>
      <h3>Stars:</h3>
      <p className="card__description">{stars}</p>
    </Fragment>
  );

  return (
    <div className="card">
      <div className="card__body">
        {!toggle && repoCardInfo()}
        {toggle && (
          <Fragment>
            <h2>
              Commits last 24 Hours to <span className="name-span">{name}</span>
            </h2>
            {loadingCommits && <div>Loading Commits...</div>}
            {commits.length >= 1 && !loadingCommits && commitCardInfo()}
            {!loadingCommits && commits.length <= 0 && (
              <div>No Commits last 24 hours</div>
            )}
          </Fragment>
        )}
        <div className="card__btn-container">
          <button className="card__btn" onClick={toggleCommits}>
            Flip Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
