const BASE_URL = process.env.BASE_URL || "http://localhost:5000/v1"

const http = {
  get: (route: string, params = {}) =>
    fetch(BASE_URL + route, { method: "GET", body: JSON.stringify(params) }),
  post: (route: string, params = {}) =>
    fetch(BASE_URL + route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }),
}

export default http
