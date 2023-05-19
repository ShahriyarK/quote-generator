import { Form, Link, redirect, useOutletContext } from "react-router-dom";
import { useRef, useState } from "react";
import "./Login.css";

const Login = () => {
  const [, setUserAuth] = useOutletContext();
  const passwordRef = useRef();
  const emailRef = useRef();
  const [loginError, setLoginError] = useState(false);
  const users = JSON.parse(localStorage.getItem("users")) || [];
  function submitHandler(e) {
    const matchedUser = users.find(
      (obj) =>
        obj.email === emailRef.current.value &&
        obj.password === passwordRef.current.value
    );
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
        <button type="submit">Login</button>
      </Form>
      <p>
        New to this app?{" "}
        <span>
          <Link className="signup-link" to="/signup">
            Sign up
          </Link>
        </span>
      </p>
      {loginError && (
        <p className="login-error">
          Invalid login credentials. Please double-check your email and password
        </p>
      )}
    </div>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const matchedUser = users.find(
    (obj) => obj.email === user.email && obj.password === user.password
  );
  if (matchedUser) {
    return redirect(`/user/${matchedUser.id}`);
  }
  return user;
}

export default Login;
