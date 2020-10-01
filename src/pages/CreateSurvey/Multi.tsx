import React from "react"

import RemoveIcon from "../../components/RemoveIcon"
import DownRightArrowIcon from "../../components/DownRightArrowIcon"

import styles from "./Multi.scss"

interface MultiProps {
  type: string
  question: IMultiQuestion
  onQuestionChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  addAnswer: () => void
  removeAnswer: (id: string) => () => void
  onAnswerChange: (
    answer: IAnswer
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Multi = ({
  type,
  question,
  onQuestionChange,
  addAnswer,
  removeAnswer,
  onAnswerChange,
}: MultiProps) => {
  return (
    <div>
      <p>{type.charAt(0).toUpperCase() + type.toLowerCase().slice(1)}</p>
      <label htmlFor={`${question.id}question`}>Question: </label>
      <input value={question.question} onChange={onQuestionChange} />
      <br />
      {question.answers.map((answer) => (
        <div key={answer.id} className={styles.answer}>
          <label htmlFor={`${question.id}${answer.id}`}>
            <DownRightArrowIcon />
          </label>
          <input value={answer.answer} onChange={onAnswerChange(answer)} />
          <RemoveIcon onClick={removeAnswer(answer.id)} />
        </div>
      ))}
      <button onClick={addAnswer}>Add answer</button>
    </div>
  )
}

export default Multi
