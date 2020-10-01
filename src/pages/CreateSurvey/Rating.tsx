import React from "react"

const Rating = ({ min, onMinChange, max, onMaxChange }) => {
  return (
    <div>
      <input type="number" value={min} onChange={onMinChange} />
      <input type="number" value={max} onChange={onMaxChange} />
    </div>
  )
}

export default Rating
