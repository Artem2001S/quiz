import React from 'react';
import classes from './AnswerItem.scss';

export default function AnswerItem({ isSelected, answerText, onClick, children }) {
  const classList = [classes.AnswerItem];
  if (isSelected) {
    classList.push(classes.active);
  }

  return (
    <li className={classList.join(' ')} onClick={onClick}>
      {answerText || children}
    </li>
  );
}
