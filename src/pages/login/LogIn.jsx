import React from 'react'
import './login.css';
import '../../commonStyles.css';

const Login = () => {
  return (
    <>
    <div className="df-jc-ac-fdc">
      <h2 >Log in</h2>
      <form  className="form df-jc-ac-fdc">
            <input  name="name" className="input" id="task-title" type="email" placeholder="Insert your email" />
            <input  name="email" className="input" id="task-responsible" type="password" placeholder="password" />
            <button className="btn" type="sumbit">Log in</button>
      </form>
      </div>
    </>
  )
}

export {Login}
