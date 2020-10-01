import React from "react"

import "./Binary.scss"

const Binary = ({ question, onQuestionChange }) => {
  return (
    <div>
      <p>Binary question (Yes/No)</p>
      <label htmlFor={`${question.id}question`}>Question: </label>
      <input
        id={`${question.id}question`}
        value={question.question}
        onChange={onQuestionChange}
      />
    </div>
  )
}

export default Binary
