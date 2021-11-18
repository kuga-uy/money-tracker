import {useState, React} from 'react'
import './signup.css'

const Signup = () => {

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) =>{
    console.log(name, surname, email,password);
  }

  
  const handleChange = (e) =>{
    setName(e.target.value)
    setSurname(e.target.value)
    setEmail(e.target.value)
    setPassword(e.target.value)
  }

  return (
    <>
      <div className="df-jc-ac-fdc">
      <h2 >Sign Up</h2>
      <form onsSubmit={handleSubmit} className="form df-jc-ac-fdc">
          <input onChange={handleChange} value={name} name="name" className="input" id="name" type="text" placeholder="name" />
          <input onChange={handleChange} value={surname} name="surname" className="input" id="surname" type="text" placeholder="surname" />
          <input onChange={handleChange} value={email} name="email" className="input" id="email" type="email" placeholder="email" />
          <input onChange={handleChange} value={password} name="password" className="input" id="password" type="password" placeholder="password" />
          <button className="btn" type="sumbit">Log in</button>
      </form>
      </div>
    </>
  )
}

export { Signup }
