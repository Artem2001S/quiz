import React from 'react';
import classes from './QuizFinished.scss'

export default function QuizFinished({text}) {
  return (
    <div>
      <h1>Your result: {text}</h1>
    </div>
  )
}
