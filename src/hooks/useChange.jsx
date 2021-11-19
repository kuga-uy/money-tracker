
import {useState} from 'react'

const useChange = () => {

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const changeNameValue = (e)=> setName(e.target.value);
  const changeSurnameValue = (e)=> setSurname(e.target.value);
  const changeEmailValue = (e)=> setEmail(e.target.value);
  const changePasswordValue = (e)=> setPassword(e.target.value);
  
  
  return {
    name, 
    surname,
    email, 
    password,
    changeNameValue,
    changeSurnameValue,
    changeEmailValue,
    changePasswordValue, 
}

}

export { useChange }
