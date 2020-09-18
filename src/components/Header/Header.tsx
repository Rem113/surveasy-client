import React from "react"

import styles from "./Header.scss"

const Header = () => (
  <h1 className={styles.brand}>
    <span className={styles.surv}>Surv</span>
    <span className={styles.easy}>easy</span>
  </h1>
)

export default Header
