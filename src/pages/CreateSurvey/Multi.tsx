import React from "react"

import { QuestionType } from "../../core/QuestionType"

import Question from "./Question"
import Square from "components/Square"
import UpDownDelete from "components/UpDownDelete"

import styles from "./Multi.scss"
import Circle from "components/Circle"

interface MultiProps {
  exclusive: boolean
  onQuestionTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  question: IMultiQuestion
  onQuestionChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDown: () => void
  onUp: () => void
  onDelete: () => void
  addAnswer: () => void
  onUpAnswer: (id: string) => void
  onDownAnswer: (id: string) => void
  removeAnswer: (id: string) => () => void
  onAnswerChange: (
    answer: IAnswer
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Multi = ({
  exclusive,
  onQuestionTypeChange,
  question,
  onQuestionChange,
  onDown,
  onUp,
  onDelete,
  addAnswer,
  onUpAnswer,
  onDownAnswer,
  removeAnswer,
  onAnswerChange,
}: MultiProps) => (
  <Question
    type={exclusive ? QuestionType.EXCLUSIVE : QuestionType.MULTI}
    onQuestionTypeChange={onQuestionTypeChange}
    question={question}
    onQuestionChange={onQuestionChange}
    onDown={onDown}
    onUp={onUp}
    onDelete={onDelete}
  >
    {question.answers.map((a) => (
      <div key={a.id} className={styles.answer}>
        <div className={styles.wrapper}>
          {exclusive ? <Circle /> : <Square />}
          <input value={a.answer} onChange={onAnswerChange(a)} />
        </div>
        <UpDownDelete
          width="16"
          height="16"
          onUp={onUpAnswer(a.id)}
          onDown={onDownAnswer(a.id)}
          onDelete={removeAnswer(a.id)}
        />
      </div>
    ))}
    <button className={styles.button} onClick={addAnswer}>
      Add answer
    </button>
  </Question>
)

export default Multi
