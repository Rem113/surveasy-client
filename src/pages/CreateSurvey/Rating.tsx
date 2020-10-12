import React from "react"

import { QuestionType } from "../../core/QuestionType"
import Question from "./Question"

import styles from "./Rating.scss"

const Rating = ({
  onQuestionTypeChange,
  question,
  onQuestionChange,
  onDown,
  onUp,
  onDelete,
  onMinChange,
  onMaxChange,
}) => {
  return (
    <Question
      type={QuestionType.RATING}
      onQuestionTypeChange={onQuestionTypeChange}
      question={question}
      onQuestionChange={onQuestionChange}
      onDown={onDown}
      onUp={onUp}
      onDelete={onDelete}
    >
      <div className={styles.wrapper}>
        <input type="number" value={question.min} onChange={onMinChange} />
        <input type="range" min={question.min} max={question.max} />
        <input type="number" value={question.max} onChange={onMaxChange} />
      </div>
    </Question>
  )
}

export default Rating
