import React, { useState, useRef } from "react"
import { v4 as uuid } from "uuid"
import Binary from "./Binary"
import Multi from "./Multi"

enum QuestionType {
  BINARY,
  MULTI,
  EXCLUSIVE,
  RATING,
}

const CreateSurvey = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([])

  const questionTypeRef = useRef<HTMLSelectElement>(null)

  const addQuestion = () => {
    if (questionTypeRef && questionTypeRef.current) {
      const type = parseInt(questionTypeRef.current.value)

      const elem: IQuestion = {
        id: uuid(),
        type,
        question: "",
      }

      switch (type) {
        case QuestionType.BINARY:
          setQuestions([...questions, elem])
          break
        case QuestionType.EXCLUSIVE:
        case QuestionType.MULTI:
          const multi = elem as IMultiQuestion
          multi.answers = [{ id: uuid(), answer: "" }]
          setQuestions([...questions, multi])
          break
        case QuestionType.RATING:
          const rating = elem as IRatingQuestion
          rating.max = 10
          rating.min = 1
          setQuestions([...questions, rating])
          break
        default:
          throw new Error("Unsupported question type")
      }
    }
  }

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
    <>
      <h1>Create a Survey</h1>
      <div>
        {questions.map((elem) => {
          const { type, question, id } = elem
          switch (type) {
            case QuestionType.BINARY:
              return (
                <Binary
                  key={id}
                  question={question}
                  onQuestionChange={onQuestionChange(id)}
                />
              )
            case QuestionType.EXCLUSIVE:
            case QuestionType.MULTI:
              return (
                <Multi
                  key={id}
                  type={QuestionType[type]}
                  question={question}
                  onQuestionChange={onQuestionChange(id)}
                  answers={(elem as IMultiQuestion).answers}
                  addAnswer={addAnswer(id)}
                  onAnswerChange={onAnswerChange(id)}
                  removeAnswer={removeAnswer(id)}
                />
              )
            case QuestionType.RATING:
              return <h3>Rating</h3>
            default:
              throw new Error("Unsupported question type")
          }
        })}
        <select ref={questionTypeRef}>
          <option value={QuestionType.BINARY}>Binary</option>
          <option value={QuestionType.MULTI}>Multi</option>
          <option value={QuestionType.EXCLUSIVE}>Exclusive</option>
          <option value={QuestionType.RATING}>Rating</option>
        </select>
        <button onClick={addQuestion}>+</button>
      </div>
    </>
  )
}

export default CreateSurvey
