import "./SignUp.css";
import SignupForm from '../../components/SignupForm/SignupForm';
import { useEffect } from "react";
import { accessLocalStorage } from "../../Utilities/LocalStorage";

const SignUp = () => {
  useEffect(()=>{
    accessLocalStorage('signup-success', 'save', null);
  }, [])
  return (
    <div className="signup-page">
      <SignupForm />
    </div>
  );
};


export default SignUp;
