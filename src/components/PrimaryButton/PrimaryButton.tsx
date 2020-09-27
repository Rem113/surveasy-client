import React from "react"

import styles from "./PrimaryButton.scss"

const BlueDropButton = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {...children}
    </button>
  )
}

export default BlueDropButton
