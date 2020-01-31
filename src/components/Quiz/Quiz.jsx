import React, { Component } from 'react';
import classes from './Quiz.scss';
import ActiveQuestion from '../ActiveQuestion/ActiveQuestion';

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <h1>Quiz</h1>
        <ActiveQuestion />
      </div>
    )
  }
}
