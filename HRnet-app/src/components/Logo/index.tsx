import './logo.scss';

import React from 'react';

function Logo() {
  return (
    <div className="logo">
      <img src="./img/logotest3.svg" alt="logo" />
      <h1 className="logo__title">
        <span className="logo__title__maj">W</span>EALTH{' '}
        <span className="logo__title__maj">H</span>EALTH
      </h1>
    </div>
  );
}

export default Logo;
