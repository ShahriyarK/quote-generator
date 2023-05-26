import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { accessLocalStorage } from "../../Utilities/LocalStorage";
import { useEffect } from 'react';

const Login = () => {
  useEffect(()=>{
    accessLocalStorage('auth-tokken', 'save', null);
  }, [])
  return (
    <div className="form-wrapper">
      <LoginForm />
    </div>
  );
};

export default Login;
