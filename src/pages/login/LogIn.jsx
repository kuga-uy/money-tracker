import React from 'react'
import { useChange } from '../../hooks/useChange';
import './login.css';
import '../../commonStyles.css';

const Login = () => {
  const {name, email, changeNameValue, changeEmailValue} = useChange();
  
  const handleForm = (e) =>  {
      e.preventDefault();
    };


  return (
    <>
    <div className="df-jc-ac-fdc">
      <h2 >Log in</h2>
      <form onSubmit={handleForm} className="form df-jc-ac-fdc">
            <input onChange={changeNameValue} value={name} name="name" className="input" id="task-title" type="email" placeholder="Insert your email" />
            <input  onChange={changeEmailValue} value={email} name="email" className="input" id="task-responsible" type="password" placeholder="password" />
            <button className="btn" type="sumbit">Log in</button>
      </form>
      </div>
    </>
  )
}

export {Login}
