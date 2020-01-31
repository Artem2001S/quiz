import React from 'react';
import classes from './AnswersList.scss';
import AnswerItem from './AnswerItem/AnswerItem';

export default function AnswersList() {
  return (
    <ul className={classes.AnswersList}>
      <AnswerItem>15</AnswerItem>
      <AnswerItem>123</AnswerItem>
      <AnswerItem>19</AnswerItem>
      <AnswerItem>18</AnswerItem>
    </ul>
  );
}
