import React from "react"

const Binary = ({ question, onQuestionChange }) => {
  return (
    <div>
      <p>Binary</p>
      <input value={question} onChange={onQuestionChange} />
    </div>
  )
}

export default Binary
