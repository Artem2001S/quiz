import React, { Component } from 'react';
import classes from './Quiz.scss';
import ActiveQuestion from '../ActiveQuestion/ActiveQuestion';

export default class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      selectedAnswerId: null,
      currentQuestion: 0,
      correctAnswers: 0,
      isFinished: false,
      questions: [
        {
          question: '12 + 3 = ?',
          answers: [{ id: 1, text: '15' }, { id: 2, text: '16' }, { id: 3, text: '17' }, { id: 4, text: '18' }],
          correctAnswerId: 1,
        },
        {
          question: '12 + 4 = ?',
          answers: [{ id: 1, text: '15' }, { id: 2, text: '16' }, { id: 3, text: '17' }, { id: 4, text: '18' }],
          correctAnswerId: 2,
        },
      ],
    };

    this.handleAnswerCLick = (id) => {
      this.setState({
        selectedAnswerId: id,
      });
    };
  }


  render() {
    const { questions, currentQuestion, selectedAnswerId } = this.state;
    return (
      <div className={classes.Quiz}>
        <h1>Quiz</h1>
        <ActiveQuestion
          question={questions[currentQuestion]}
          selectedAnswerId={selectedAnswerId}
          onAnswerClick={this.handleAnswerCLick}
        />
      </div>
    );
  }
}
