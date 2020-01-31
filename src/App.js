import React from 'react';
import classes from './App.scss';
import Quiz from './components/Quiz/Quiz';

export default function App() {
  return (
    <div className={classes.App}>
      <Quiz />
    </div>
  );
}
