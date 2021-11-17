import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <>
      <div className="df-jc-ac-fdc">
      <h2 >Sign Up</h2>
      <form  className="form df-jc-ac-fdc">
            <input  name="name" className="input" id="task-title" type="text" placeholder="name" />
            <input  name="name" className="input" id="task-title" type="text" placeholder="surname" />
            <input  name="name" className="input" id="task-title" type="email" placeholder="email" />
            <input  name="email" className="input" id="task-responsible" type="password" placeholder="password" />
            <button className="btn" type="sumbit">Log in</button>
      </form>
      </div>
    </>
  )
}

export { Signup }
