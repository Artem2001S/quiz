import React from 'react'
import Button from '../Button/Button'

export default function ActiveQuestion() {
  return (
    <div>
      <div>12 + 3 = ?</div>
      <ul>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>15</li>
      </ul>
      <Button>Next</Button>
    </div>
  )
}
