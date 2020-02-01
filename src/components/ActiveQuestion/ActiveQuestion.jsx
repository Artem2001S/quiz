import React from 'react';
import Button from '../Button/Button';
import AnswersList from './AnswersList/AnswersList';
import classes from './ActiveQuestion.scss';

export default function ActiveQuestion({ question, selectedAnswerId, onAnswerClick }) {
  return (
    <div>
      <div className={classes.question}>12 + 3 = ?</div>
      <AnswersList
        answers={question.answers}
        selectedAnswerId={selectedAnswerId}
        onAnswerClick={onAnswerClick}
      />
      <Button>Next</Button>
    </div>
  );
}
