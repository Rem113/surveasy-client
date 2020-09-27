import React, { Fragment } from "react"

interface MultiProps {
  type: string
  question: string
  onQuestionChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  answers: IAnswer[]
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
  answers,
  addAnswer,
  removeAnswer,
  onAnswerChange,
}: MultiProps) => {
  return (
    <div>
      <p>{type.charAt(0).toUpperCase() + type.toLowerCase().slice(1)}</p>
      <input value={question} onChange={onQuestionChange} />
      <br />
      {answers.map((answer) => (
        <Fragment key={answer.id}>
          <input value={answer.answer} onChange={onAnswerChange(answer)} />
          <button onClick={removeAnswer(answer.id)}>Remove this answer</button>
          <br />
        </Fragment>
      ))}
      <button onClick={addAnswer}>Add answer</button>
    </div>
  )
}

export default Multi
