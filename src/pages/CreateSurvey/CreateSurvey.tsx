import React, { useState } from "react"
import { v4 as uuid } from "uuid"

import { QuestionType } from "../../core/QuestionType"

import PrimaryButton from "components/PrimaryButton"

import Binary from "./Binary"
import Multi from "./Multi"
import Rating from "./Rating"

import styles from "./CreateSurvey.scss"

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

  const onQuestionTypeChange = (id: string) => (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const type = parseInt(e.currentTarget.value)

    if (type === QuestionType.BINARY) {
      setQuestions(
        questions.map((q) =>
          q.id === id ? { id, type, question: q.question } : q
        )
      )
    } else if (type === QuestionType.RATING) {
      setQuestions(
        questions.map((q) =>
          q.id === id ? { id, type, question: q.question, min: 1, max: 10 } : q
        )
      )
    } else {
      const question = questions.find((q) => q.id === id)!

      if (
        question.type === QuestionType.EXCLUSIVE ||
        question.type === QuestionType.MULTI
      ) {
        setQuestions(
          questions.map((q) =>
            q.id === id
              ? {
                  id,
                  type,
                  question: q.question,
                  answers: (q as IMultiQuestion).answers,
                }
              : q
          )
        )
      } else {
        setQuestions(
          questions.map((q) =>
            q.id === id
              ? {
                  id,
                  type,
                  question: q.question,
                  answers: [
                    { id: uuid(), answer: "Answer 1" },
                    { id: uuid(), answer: "Answer 2" },
                  ],
                }
              : q
          )
        )
      }
    }
  }

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

  const onUpAnswer = (id: string) => (answerId: string) => () => {
    const question = questions.find((q) => q.id === id) as IMultiQuestion
    const index = question.answers.findIndex((a) => a.id === answerId)

    if (index > 0) {
      const answers = [...question.answers]
      answers[index - 1] = question.answers[index]
      answers[index] = question.answers[index - 1]
      setQuestions(questions.map((q) => (q.id === id ? { ...q, answers } : q)))
    }
  }

  const onDownAnswer = (id: string) => (answerId: string) => () => {
    const question = questions.find((q) => q.id === id) as IMultiQuestion
    const index = question.answers.findIndex((a) => a.id === answerId)

    if (index < question.answers.length - 1) {
      const answers = [...question.answers]
      answers[index + 1] = question.answers[index]
      answers[index] = question.answers[index + 1]
      setQuestions(questions.map((q) => (q.id === id ? { ...q, answers } : q)))
    }
  }

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
                  onQuestionTypeChange={onQuestionTypeChange(id)}
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
                  exclusive={type === QuestionType.EXCLUSIVE}
                  onQuestionTypeChange={onQuestionTypeChange(id)}
                  question={elem as IMultiQuestion}
                  onQuestionChange={onQuestionChange(id)}
                  onDown={onDown(id)}
                  onUp={onUp(id)}
                  onDelete={onDelete(id)}
                  addAnswer={addAnswer(id)}
                  onUpAnswer={onUpAnswer(id)}
                  onDownAnswer={onDownAnswer(id)}
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
