import React from 'react';
import classes from './Button.scss';

export default function Button({ children, onClick }) {
  return (
    <button className={classes.Button} onClick={onClick}>
      {children}
    </button>
  );
}
