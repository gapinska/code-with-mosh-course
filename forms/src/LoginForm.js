import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"

const LoginForm = () => {
  const [account, setAccount] = useState({
    userName: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(account)
  }

  const handleChange = ({ currentTarget: input }) => {
    const newAccount = { ...account }
    newAccount[input.name] = input.value
    setAccount(newAccount)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">UserName</label>
          <input
            id="userName"
            name="userName"
            autoFocus
            type="text"
            className="form-control"
            value={account.userName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            onChange={handleChange}
            type="password"
            className="form-control"
            value={account.password}
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
