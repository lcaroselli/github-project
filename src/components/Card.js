import React, { Fragment } from 'react';

const Card = ({ name, stars, url }) => {
  const repoCardInfo = () => (
    <Fragment>
      <h2>Repository Information</h2>
      <h3>Name:</h3>
      <p className='card__title'>{name}</p>
      <h3>URL:</h3>
      <p className='card__description'>{url}</p>
      <h3>Stars:</h3>
      <p className='card__description'>{stars}</p>
    </Fragment>
  );

  return (
    <div className='card'>
      <div className='card__body'>
        {repoCardInfo()}
        <div className='card__btn-container'>
          <button className='card__btn'>Flip Card</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
