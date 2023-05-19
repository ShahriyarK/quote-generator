import { Form, useActionData } from "react-router-dom";
import "./SignUp.css";
import { validateUser } from "./SignUpUtil";

const SignUp = () => {
  const actionData = useActionData();

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <Form method="post" className="signup-form">
        <div className="name-wrap">
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="fname"
              required
              pattern="[A-Za-z]+"
              title="First name can only contain letters from the alphabet"
              placeholder="Enter your first name"
            ></input>
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              required
              pattern="[A-Za-z]+"
              title="Last name can only contain letters from the alphabet"
              placeholder="Enter your last name"
            ></input>
          </div>
        </div>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          placeholder="Enter your password"
          minLength="8"
          pattern="(?=.*[A-Z])(?=.*[,!?.@$%^&*#]).*"
          title="Password must contain atleast one capital letter and one special character"
        ></input>
        <label>Confirm Password</label>
        <input
          type="password"
          required
          name="confirmPass"
          placeholder="Re-enter your password"
        ></input>
        <button type="submit">Sign up</button>
      </Form>
      {actionData && <p className="signup-error">{actionData}</p>}
    </div>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const matchedUser = users.find((obj) => obj.email === userData.email);
  const formAction = validateUser(userData, users, matchedUser, "/login");
  return formAction;
}

export default SignUp;
