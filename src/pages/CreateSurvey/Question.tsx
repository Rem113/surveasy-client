import React from "react"

import { QuestionType } from "../../core/QuestionType"

import UpDownDelete from "components/UpDownDelete"

import styles from "./Question.scss"

const Question = ({
  type,
  onQuestionTypeChange,
  question,
  onQuestionChange,
  onDown,
  onUp,
  onDelete,
  children,
}) => (
  <div className={styles.container}>
    <div className={styles.top}>
      <input
        id={`${question.id}question`}
        value={question.question}
        onChange={onQuestionChange}
      />
      <select value={type} onChange={onQuestionTypeChange}>
        <option value={QuestionType.BINARY}>Binary</option>
        <option value={QuestionType.EXCLUSIVE}>Exclusive</option>
        <option value={QuestionType.MULTI}>Multi</option>
        <option value={QuestionType.RATING}>Rating</option>
      </select>
    </div>
    <div className={styles.content}>{children}</div>
    <div className={styles.bottom}>
      <UpDownDelete
        width="24"
        height="24"
        onDown={onDown}
        onUp={onUp}
        onDelete={onDelete}
      />
    </div>
  </div>
)

export default Question
