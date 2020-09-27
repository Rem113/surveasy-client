import React, { useState } from "react"
import { Link } from "react-router-dom"

import PrimaryButton from "../../components/PrimaryButton"
import GoogleLogo from "../../components/GoogleLogo"

import routes from "../../config/routes"

import styles from "./Login.scss"

const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const submit = () => {
    console.log(email, pass)
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
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
      <PrimaryButton onClick={submit}>Login</PrimaryButton>
      <h4>OR</h4>
      <button className={styles["google-button"]}>
        <GoogleLogo />
        Sign in with Google
      </button>
      <h5>
        Don't have an account? <Link to={routes.SIGNUP}>Sign up</Link>
      </h5>
    </div>
  )
}

export default Login
