import React from 'react'
import Button from '../Button/Button'
import AnswersList from './AnswersList/AnswersList'
import classes from './ActiveQuestion.scss'

export default function ActiveQuestion(props) {
  return (
    <div>
      <div className={classes.question}>12 + 3 = ?</div>
      <AnswersList
        answers={props.question.answers}
        selectedAnswerId={props.selectedAnswerId}
        onAnswerClick={props.onAnswerClick}
      />
      <Button>Next</Button>
    </div>
  )
}
