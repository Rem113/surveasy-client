import React from "react"
import { Link } from "react-router-dom"

import routes from "../../config/routes"

import Illustration from "./Illustration"

import styles from "./Home.scss"

const Home = () => (
  <>
    <Illustration />

    <div className={styles.container}>
      <div className={styles.hero}>
        <h2 className={styles.title}>
          Creating surveys has never been so easy.
        </h2>
        <p className={styles.subtitle}>
          Sign up for free and start building your first survey right now.
        </p>
        <div className={styles.actions}>
          <Link to={routes.SIGNUP}>
            <button className={styles["main-cta"]}>Sign up</button>
          </Link>
          <Link to={routes.LOGIN}>
            <button className={styles["secondary-cta"]}>Log in</button>
          </Link>
        </div>
      </div>
    </div>
  </>
)

export default Home
