import React, { useState } from "react"
import { v4 as uuid } from "uuid"

import PrimaryButton from "components/PrimaryButton"

import Binary from "./Binary"
import Multi from "./Multi"
import Rating from "./Rating"

import styles from "./CreateSurvey.scss"

enum QuestionType {
  BINARY,
  MULTI,
  EXCLUSIVE,
  RATING,
}

const CreateSurvey = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([])

  const onDown = (id: string) => () => {
    const index = questions.findIndex((q) => q.id === id)

    if (index < questions.length - 1) {
      const arr = [...questions]
      arr[index + 1] = questions[index]
      arr[index] = questions[index + 1]
      setQuestions(arr)
    }
  }

  const onUp = (id: string) => () => {
    const index = questions.findIndex((q) => q.id === id)

    if (index > 0) {
      const arr = [...questions]
      arr[index - 1] = questions[index]
      arr[index] = questions[index - 1]
      setQuestions(arr)
    }
  }

  const onDelete = (id: string) => () =>
    setQuestions(questions.filter((q) => q.id !== id))

  const addQuestion = () =>
    setQuestions([
      ...questions,
      { id: uuid(), type: QuestionType.BINARY, question: "Question" },
    ])

  const onQuestionChange = (id: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) =>
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, question: e.currentTarget.value } : q
      )
    )

  const addAnswer = (id: string) => () =>
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              answers: [
                ...(q as IMultiQuestion).answers,
                { id: uuid(), answer: "" },
              ],
            }
          : q
      )
    )

  const onAnswerChange = (id: string) => (answer: IAnswer) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) =>
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              answers: (q as IMultiQuestion).answers.map((a) =>
                a.id === answer.id ? { ...a, answer: e.currentTarget.value } : a
              ),
            }
          : q
      )
    )

  const onMinChange = (id: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) =>
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              min: parseInt(e.currentTarget.value),
            }
          : q
      )
    )

  const onMaxChange = (id: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) =>
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              max: parseInt(e.currentTarget.value),
            }
          : q
      )
    )

  const removeAnswer = (id: string) => (answerId: string) => () =>
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              answers: (q as IMultiQuestion).answers.filter(
                (a) => a.id !== answerId
              ),
            }
          : q
      )
    )

  return (
    <div className={styles.container}>
      <h1>Create a Survey</h1>
      <br />
      <PrimaryButton onClick={addQuestion}>Add question</PrimaryButton>
      <br />
      <br />
      <div>
        {questions.map((elem) => {
          const { type, id } = elem
          switch (type) {
            case QuestionType.BINARY:
              return (
                <Binary
                  key={id}
                  question={elem}
                  onQuestionChange={onQuestionChange(id)}
                  onDown={onDown(id)}
                  onUp={onUp(id)}
                  onDelete={onDelete(id)}
                />
              )
            case QuestionType.EXCLUSIVE:
            case QuestionType.MULTI:
              return (
                <Multi
                  key={id}
                  type={QuestionType[type]}
                  question={elem as IMultiQuestion}
                  onQuestionChange={onQuestionChange(id)}
                  addAnswer={addAnswer(id)}
                  onAnswerChange={onAnswerChange(id)}
                  removeAnswer={removeAnswer(id)}
                />
              )
            case QuestionType.RATING:
              return (
                <Rating
                  key={id}
                  min={(elem as IRatingQuestion).min}
                  onMinChange={onMinChange(id)}
                  max={(elem as IRatingQuestion).max}
                  onMaxChange={onMaxChange(id)}
                />
              )
            default:
              throw new Error("Unsupported question type")
          }
        })}
      </div>
    </div>
  )
}

export default CreateSurvey
