import React from "react"

import { QuestionType } from "../../core/QuestionType"

import Circle from "components/Circle"

import styles from "./Binary.scss"
import Question from "./Question"

const Binary = ({
  onQuestionTypeChange,
  question,
  onQuestionChange,
  onDown,
  onUp,
  onDelete,
}) => (
  <Question
    type={QuestionType.BINARY}
    onQuestionTypeChange={onQuestionTypeChange}
    question={question}
    onQuestionChange={onQuestionChange}
    onDown={onDown}
    onUp={onUp}
    onDelete={onDelete}
  >
    <div className={styles.answer}>
      <Circle />
      <p>Yes</p>
    </div>
    <div className={styles.answer}>
      <Circle />
      <p>No</p>
    </div>
  </Question>
)

export default Binary
