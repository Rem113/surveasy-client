import React from "react"

import styles from "./Home.scss"

const Home = () => (
  <div className={styles.container}>
    <svg className={styles.background} viewBox="0 0 525.54 932.5">
      <g>
        <g>
          <path
            style={{ fill: "#e2f8ff" }}
            d="M44.46,680.47V0H546.54V932.5Z"
            transform="translate(-21)"
          />
          <path
            style={{ fill: "#bdefff" }}
            d="M176,651.46V0H546V829Z"
            transform="translate(-21)"
          />
          <g className={styles.urn}>
            <path
              style={{ fill: "#008ebb" }}
              d="M206,819,21,726.52V498.82l185,92.5Z"
              transform="translate(-21)"
            />
            <path
              style={{ fill: "#00b6ef" }}
              d="M206,819l185-92.5V498.83L206,591.32Z"
              transform="translate(-21)"
            />
            <path
              style={{ fill: "#20c9ff" }}
              d="M21.62,499.09l177.59-92.34L391,499.09,206.31,591.44Z"
              transform="translate(-21)"
            />
            <rect
              style={{ fill: "#fff" }}
              x="115.52"
              y="353.29"
              width="128.36"
              height="174"
              rx="8"
              transform="translate(-199.41 127.39) rotate(-26.65)"
            />
            <rect
              style={{ fill: "#dcdcdc" }}
              x="164.14"
              y="481.35"
              width="66.32"
              height="7.13"
              rx="3.57"
              transform="translate(-217.55 140.03) rotate(-26.65)"
            />
            <rect
              style={{ fill: "#afafaf" }}
              x="146.19"
              y="474.29"
              width="58.83"
              height="7.13"
              rx="3.57"
              transform="translate(-216.69 129.54) rotate(-26.65)"
            />
            <rect
              style={{ fill: "#dcdcdc" }}
              x="169.51"
              y="493.31"
              width="55.62"
              height="7.13"
              rx="3.57"
              transform="translate(-222.92 141.31) rotate(-26.65)"
            />
            <rect
              style={{ fill: "#dcdcdc" }}
              x="174.08"
              y="501.91"
              width="59.9"
              height="7.13"
              rx="3.57"
              transform="translate(-226.06 145.23) rotate(-26.65)"
            />
            <rect
              style={{ fill: "#dcdcdc" }}
              x="141.91"
              y="437.05"
              width="66.32"
              height="7.13"
              rx="3.57"
              transform="translate(-200.05 125.35) rotate(-26.65)"
            />
            <rect
              style={{ fill: "#afafaf" }}
              x="116.98"
              y="411.23"
              width="99.84"
              height="7.13"
              rx="3.57"
              transform="translate(-189.33 118.94) rotate(-26.65)"
            />
            <rect
              style={{ fill: "#878787" }}
              x="99.55"
              y="376.5"
              width="99.84"
              height="7.13"
              rx="3.57"
              transform="translate(-175.6 107.43) rotate(-26.65)"
            />
            <rect
              style={{ fill: "#878787" }}
              x="104.35"
              y="386.06"
              width="99.84"
              height="7.13"
              rx="3.57"
              transform="translate(-179.38 110.6) rotate(-26.65)"
            />
            <rect
              style={{ fill: "#878787" }}
              x="111.78"
              y="406.73"
              width="50.27"
              height="7.13"
              rx="3.57"
              transform="translate(-190.5 105.01) rotate(-26.65)"
            />
            <rect
              style={{ fill: "#afafaf" }}
              x="125.11"
              y="434.87"
              width="37.08"
              height="7.13"
              rx="3.57"
              transform="translate(-202.4 111.02) rotate(-26.65)"
            />
            <rect
              style={{ fill: "#dcdcdc" }}
              x="147.28"
              y="449.01"
              width="55.62"
              height="7.13"
              rx="3.57"
              transform="translate(-205.41 126.63) rotate(-26.65)"
            />
            <circle
              style={{ fill: "#dcdcdc" }}
              cx="116.47"
              cy="459.49"
              r="3.57"
            />
            <circle
              style={{ fill: "#dcdcdc" }}
              cx="121.27"
              cy="469.05"
              r="3.57"
            />
            <circle
              style={{ fill: "#02aee4" }}
              cx="116.47"
              cy="459.49"
              r="1.78"
            />
            <rect
              style={{ fill: "#dcdcdc" }}
              x="156.13"
              y="500.22"
              width="7.13"
              height="7.13"
              transform="translate(-230.01 125.16) rotate(-26.65)"
            />
            <rect
              style={{ fill: "#dcdcdc" }}
              x="160.93"
              y="509.78"
              width="7.13"
              height="7.13"
              transform="translate(-233.79 128.33) rotate(-26.65)"
            />
            <rect
              style={{ fill: "#dcdcdc" }}
              x="165.73"
              y="519.34"
              width="7.13"
              height="7.13"
              transform="translate(-237.57 131.5) rotate(-26.65)"
            />
            <path
              style={{ fill: "none" }}
              d="M157.3,504.57l2.53.75,1.62-4.41"
              transform="translate(-21)"
            />
            <path
              style={{ fill: "none" }}
              d="M167.06,524l2.53.75,1.62-4.41"
              transform="translate(-21)"
            />
            <rect
              strokeWidth="3px"
              x="144.64"
              y="503.45"
              width="144.75"
              height="19.04"
              transform="translate(-227.63 151.36) rotate(-26.59)"
            />
            <rect
              style={{ fill: "#20c9ff" }}
              x="140.14"
              y="503.69"
              width="156.59"
              height="23.89"
              transform="translate(-228.67 152.28) rotate(-26.59)"
            />
          </g>
        </g>
      </g>
    </svg>

    <div className={styles.hero}>
      <h2 className={styles.title}>Creating surveys has never been so easy.</h2>
      <p className={styles.subtitle}>
        Sign up for free and start building your first survey right now.
      </p>
      <div className={styles.actions}>
        <button className={styles["main-cta"]}>Sign up</button>
        <button className={styles["secondary-cta"]}>Log in</button>
      </div>
    </div>
  </div>
)

export default Home
