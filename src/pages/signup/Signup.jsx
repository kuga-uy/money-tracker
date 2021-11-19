import {React} from 'react'
import {useChange} from '../../hooks/useChange';
import './signup.css'

const Signup = () => {

  const input = useChange();
  
  const handleForm = (e) =>  {
      e.preventDefault();
    };


  return (
    <>
      <div className="df-jc-ac-fdc">
      <h2 >Sign Up</h2>
      <form onSubmit={handleForm} className="form df-jc-ac-fdc">
          <input onChange={input.changeNameValue} value={input.name} name="name" className="input" id="name" type="text" placeholder="name" />
          <input onChange={input.changeSurnameValue} value={input.surname} name="surname" className="input" id="surname" type="text" placeholder="surname" />
          <input onChange={input.changeEmailValue} value={input.email} name="email" className="input" id="email" type="email" placeholder="email" />
          <input onChange={input.changePasswordValue} value={input.password}  name="password" className="input" id="password" type="password" placeholder="password" />
          <button className="btn" type="sumbit">Log in</button>
      </form>
      </div>
    </>
  )
}

export { Signup }
