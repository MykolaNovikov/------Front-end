import React, {useState} from "react";
import { actionFullLogin,actionFullRegister } from "../../helpers/helpers";
import { useDispatch } from 'react-redux';
import { history } from "../../App";

const LoginForm = () => {
  const dispatch = useDispatch()
  const [login1, setLogin] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>
      <div className='loginDiv'>
        <div className='loginForm'>
          <h1 style={{color: "red"}}>Увійдіть в систему</h1>
          <label htmlFor='login' style={{color: "blue"}}>LOGIN</label>
          <input
            placeholder='login...'
            id='login'
            type = 'text'
            value = {login1}
            onChange = {(e) => setLogin(e.target.value)}>
          </input>
          <label htmlFor='password' style={{color: "blue"}}>PASSWORD</label>
          <input 
            placeholder='password...'
            id='password'
            type = 'password'
            value ={password}
            onChange ={(e) => setPassword(e.target.value)}>
          </input>
          <button
            disabled ={(!login1 || !password) && true }
            onClick ={() =>{
              history.push("/")
              dispatch(actionFullLogin(login1, password))}
            } >LOGIN</button>
          </div>
      </div>
    </>
    )
}

const RegistrationForm = () => {
  const dispatch = useDispatch()
  const [login1, setLogin] = useState("")
  const [password1, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  return (
    <div className='registrationDiv'>
      <div className='registration-form'>
        <h1 style={{color: "red"}}>Зареєструйтесь</h1>
        <label htmlFor='login1' style={{color: "blue"}}>LOGIN</label>
        <input
          placeholder='login...'
          id='login1'
          type = 'text'
          value = {login1}
          onChange = {(e) => setLogin(e.target.value)}>
        </input>
        <label htmlFor='password1' style={{color: "blue"}}>PASSWORD</label>
        <input 
          placeholder='password...'
          id='password1'
          type = 'password'
          value = {password1}
          onChange ={(e) => setPassword(e.target.value)}>
        </input>
        <label htmlFor='repeatPassword' style={{color: 'blue'}}>REPEAT PASSWORD</label>
        <input
          placeholder='repeat password'
          id="repeatPassword"
          type='password'
          value={repeatPassword}
          onChange = {(e) => setRepeatPassword(e.target.value)}
        ></input>
        <button
            disabled ={(!login1 || !password1 || !repeatPassword || (password1 !== repeatPassword)) && true }
            onClick ={() =>{
              history.push("/")
              dispatch(actionFullRegister(login1, password1))}}>Sign Up</button>
      </div>
    </div>
  )
}

export {LoginForm,RegistrationForm}