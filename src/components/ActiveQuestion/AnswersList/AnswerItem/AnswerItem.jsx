import React from 'react';
import classes from './AnswerItem.scss'

export default function AnswerItem(props) {
  const classList = [classes.AnswerItem];
  if (props.isSelected) {
    classList.push(classes.active)
  }

  return (
    <li className={classList.join(' ')} onClick={props.onClick}>
      {props.answerText || props.children}
    </li>
  );
}
