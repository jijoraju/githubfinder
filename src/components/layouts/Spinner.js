import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{
        width: '100px',
        display: 'block',
        margin: 'auto'
      }}
    ></img>
  </Fragment>
);

export default Spinner;
