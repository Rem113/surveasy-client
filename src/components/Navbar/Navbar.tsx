import React from "react"
import { useLocation, Link } from "react-router-dom"

import styles from "./Navbar.scss"
import routes from "../../config/routes"

const Navbar = () => {
  const location = useLocation()

  return (
    <div className={styles.navbar}>
      <ul>
        <Link to={routes.HOME}>
          <li
            className={location.pathname === routes.HOME ? styles.active : ""}
          >
            <svg width="30" viewBox="0 0 24 24">
              <g>
                <g>
                  <rect width="24" height="24" opacity="0" />
                  <path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z" />
                </g>
              </g>
            </svg>
            <p>Home</p>
          </li>
        </Link>
        <Link to={routes.ABOUT}>
          <li
            className={location.pathname === routes.ABOUT ? styles.active : ""}
          >
            <svg width="30" viewBox="0 0 24 24">
              <g>
                <g>
                  <rect
                    width="24"
                    height="24"
                    transform="rotate(180 12 12)"
                    opacity="0"
                  />
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <circle cx="12" cy="8" r="1" />
                  <path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z" />
                </g>
              </g>
            </svg>
            <p>About</p>
          </li>
        </Link>
        <Link to={routes.CONTACT}>
          <li
            className={
              location.pathname === routes.CONTACT ? styles.active : ""
            }
          >
            <svg width="30" viewBox="0 0 24 24">
              <g>
                <g>
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="16" cy="12" r="1" />
                  <circle cx="8" cy="12" r="1" />
                  <path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zm.83 8.36a8 8 0 0 1-11 6.08 3.26 3.26 0 0 0-1.25-.26 3.43 3.43 0 0 0-.56.05l-2.82.57.57-2.82a3.09 3.09 0 0 0-.21-1.81 8 8 0 0 1 6.08-11 8 8 0 0 1 9.19 9.19z" />
                  <rect width="24" height="24" opacity="0" />
                </g>
              </g>
            </svg>
            <p>Contact</p>
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
