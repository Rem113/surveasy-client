import React from "react"

import Circle from "components/Circle"
import UpDownDelete from "components/UpDownDelete"

import styles from "./Binary.scss"

const Binary = ({ question, onQuestionChange, onDown, onUp, onDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <input
          id={`${question.id}question`}
          value={question.question}
          onChange={onQuestionChange}
        />
        <select>
          <option>Binary</option>
          <option>Exclusive</option>
          <option>Multi</option>
          <option>Rating</option>
        </select>
      </div>
      <div className={styles.content}>
        <div className={styles.answer}>
          <Circle />
          <p>Yes</p>
        </div>
        <div className={styles.answer}>
          <Circle />
          <p>No</p>
        </div>
      </div>
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
}

export default Binary
