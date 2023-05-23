import { Form, Link, useOutletContext, redirect } from "react-router-dom";
import { useRef, useState } from "react";
import "./Login.css";
import { accessLocalStorage } from "../../Utilities/LocalStorage";
import { matchUserCredentials } from "./LoginUtil";
const Login = () => {
  const [, setUserAuth] = useOutletContext();
  const passwordRef = useRef();
  const emailRef = useRef();
  const [loginError, setLoginError] = useState(false);
  const users = accessLocalStorage("users", "fetch");

  function submitHandler(e) {
    const matchedUser = matchUserCredentials(users, emailRef.current.value, passwordRef.current.value);
    if (matchedUser) {
      setUserAuth(true);
    } else {
      e.preventDefault();
      setLoginError(true);
    }
  }
  return (
    <div className="form-wrapper">
      <h2>Login to view and create your own quotes.</h2>
      <Form method="post" onSubmit={submitHandler} className="login-form">
        <label>Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          ref={emailRef}
          placeholder="Enter your email"
        ></input>
        <label>Password</label>
        <input
          id="password"
          type="password"
          name="password"
          required
          ref={passwordRef}
          placeholder="Enter your password"
        ></input>
        <button type="submit">login</button>
      </Form>
      <p>
        New to this app?{" "}
        <span>
          <Link className="signup-link" to="/signup">
            Sign up
          </Link>
        </span>
      </p>
      {loginError && <p className="login-error">Invalid login credentials. Please double-check your email and password</p>}
    </div>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);
  const users = accessLocalStorage("users", "fetch");
  const matchedUser = matchUserCredentials(users, email, password);
  if (matchedUser) {
    return redirect(`/user/${matchedUser.id}`);
  }
  return matchedUser;
}

export default Login;
