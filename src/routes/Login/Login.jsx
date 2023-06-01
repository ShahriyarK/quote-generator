import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { accessLocalStorage } from "../../Utilities/LocalStorage";
import { useEffect } from 'react';

const Login = () => {
  const signupMsg = accessLocalStorage('signup-success', 'fetch');
  useEffect(()=>{
    accessLocalStorage('auth-tokken', 'save', null);
  }, [])
  return (
    <div className="form-wrapper">
      <LoginForm />
      {signupMsg && <p className='signup-msg'>{signupMsg}</p>}
    </div>
  );
};

export default Login;
