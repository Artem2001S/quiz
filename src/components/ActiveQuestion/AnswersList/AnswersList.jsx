import React from 'react';
import classes from './AnswersList.scss';
import AnswerItem from './AnswerItem/AnswerItem';

export default function AnswersList(props) {
  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={answer.text + index}
            isSelected={answer.id === props.selectedAnswerId}
            onClick={props.onAnswerClick.bind(this, answer.id)}
          >
            {answer.text}
          </AnswerItem>
        )
      })}
    </ul>
  );
}
