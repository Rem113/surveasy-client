import React, { useState } from "react"
import { Link } from "react-router-dom"

import GoogleLogo from "../../components/GoogleLogo"

import routes from "../../config/routes"
import http from "../../utils/http"

import styles from "./SignUp.scss"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confPass, setConfPass] = useState("")

  const submit = () => {
    http
      .post("/auth/register", { email, pass, confPass })
      .then((res) => console.log(res.body))
  }

  return (
    <div className={styles.container}>
      <h1>SignUp</h1>
      <div className={styles.input}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <label htmlFor="pass">Password</label>
        <input
          id="pass"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <label htmlFor="confPass">Confirm password</label>
        <input
          id="confPass"
          type="password"
          value={confPass}
          onChange={(e) => setConfPass(e.target.value)}
        />
      </div>
      <button className={styles.button} onClick={submit}>
        Sign Up
      </button>
      <h3>OR</h3>
      <button className={styles["google-button"]}>
        <GoogleLogo />
        Sign up with Google
      </button>
      <h5>
        Already have an account? <Link to={routes.LOGIN}>Login</Link>
      </h5>
    </div>
  )
}

export default SignUp
