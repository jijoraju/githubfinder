import React from 'react';

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div>
        <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
      </div>
    )
  );
};
