import React from 'react';
import classes from './AnswersList.scss';
import AnswerItem from './AnswerItem/AnswerItem';

export default function AnswersList({ answers, onAnswerClick, selectedAnswerId }) {
  return (
    <ul className={classes.AnswersList}>
      {answers.map((answer, index) => (
        <AnswerItem
          key={answer.text + index}
          isSelected={answer.id === selectedAnswerId}
          onClick={onAnswerClick.bind(this, answer.id)}
        >
          {answer.text}
        </AnswerItem>
      ))}
    </ul>
  );
}
