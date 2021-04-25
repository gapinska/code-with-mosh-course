import React, { createRef, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"

const LoginForm = () => {
  const userName = createRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = userName.current.value
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">UserName</label>
          <input
            id="userName"
            autoFocus
            ref={userName}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" className="form-control" />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
