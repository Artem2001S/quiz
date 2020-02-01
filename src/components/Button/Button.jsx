import React from 'react';
import classes from './Button.scss';

export default function Button({ children }) {
  return (
    <button className={classes.Button}>
      {children}
    </button>
  );
}
