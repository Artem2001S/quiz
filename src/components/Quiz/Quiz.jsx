import React, { Component } from 'react';
import classes from './Quiz.scss';
import ActiveQuestion from '../ActiveQuestion/ActiveQuestion';
import QuizFinished from './QuizFinished/QuizFinished';
import Button from '../Button/Button';

export default class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      selectedAnswerId: null,
      currentQuestionIndex: 0,
      correctAnswersCount: 0,
      isFinished: false,
      questions: [
        {
          question: '12 + 3 = ?',
          answers: [{ id: 1, text: '15' }, { id: 2, text: '16' }, { id: 3, text: '17' }, { id: 4, text: '18' }],
          correctAnswerId: 1,
        },
        {
          question: '12 + 4 = ?',
          answers: [{ id: 1, text: '25' }, { id: 2, text: '16' }, { id: 3, text: '17' }, { id: 4, text: '18' }],
          correctAnswerId: 2,
        },
        {
          question: '12 + 5 = ?',
          answers: [{ id: 1, text: '35' }, { id: 2, text: '36' }, { id: 3, text: '17' }, { id: 4, text: '18' }],
          correctAnswerId: 3,
        },
      ],
    };

    this.handleAnswerCLick = (id) => {
      this.setState({
        selectedAnswerId: id,
      });
    };

    this.showNextQuestion = () => {
      if (this.state.selectedAnswerId === null) {
        return;
      }

      this.setState((state) => {
        const question = state.questions[state.currentQuestionIndex];
        let newCorrectAnswersCount = state.correctAnswersCount;

        if (question.correctAnswerId === state.selectedAnswerId) {
          newCorrectAnswersCount += 1;
        }

        return {
          isFinished: this.checkFinished(),
          currentQuestionIndex: state.currentQuestionIndex + 1,
          selectedAnswerId: null,
          correctAnswersCount: newCorrectAnswersCount,
        }
      });
    }

    this.checkFinished = () => {
      return this.state.currentQuestionIndex === this.state.questions.length - 1;
    }
  }


  render() {
    const { questions, currentQuestionIndex, selectedAnswerId, isFinished, correctAnswersCount } = this.state;
    return (
      <div className={classes.Quiz}>
        <h1>Quiz</h1>
        {
          isFinished ?
            <>
              <QuizFinished text={`${correctAnswersCount}/${questions.length}`} />
            </>
            :
            <ActiveQuestion
              question={questions[currentQuestionIndex]}
              selectedAnswerId={selectedAnswerId}
              onAnswerClick={this.handleAnswerCLick}
              onNextClick={this.showNextQuestion}
            />
        }
      </div>
    );
  }
}
