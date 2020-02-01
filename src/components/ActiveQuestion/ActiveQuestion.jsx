import React from 'react';
import Button from '../Button/Button';
import AnswersList from './AnswersList/AnswersList';
import classes from './ActiveQuestion.scss';

export default function ActiveQuestion({ question, selectedAnswerId, onAnswerClick, onNextClick }) {
  return (
    <div>
      <div className={classes.question}>{question.question}</div>
      <AnswersList
        answers={question.answers}
        selectedAnswerId={selectedAnswerId}
        onAnswerClick={onAnswerClick}
      />
      <Button onClick={onNextClick}>Next</Button>
    </div>
  );
}
