import React from 'react';
import classes from './AnswerItem.scss'

export default function AnswerItem(props) {
  return (
    <li className={classes.AnswerItem}>
      {props.answerText || props.children}
    </li>
  );
}
