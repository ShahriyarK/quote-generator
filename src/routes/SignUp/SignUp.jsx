import {Form, redirect} from 'react-router-dom';
import {useRef} from 'react';
import './SignUp.css'
export default function SignUp() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const passwordRef = useRef();
    const handlePassword = function (e) {
        if (e.target.value !== passwordRef.current.value) {
            e.target.setCustomValidity('Passwords dont match');
        } else{
            e.target.setCustomValidity('');
        }
    }
    const handleEmail = function(e) {
        const matchedUser = users.find(obj => obj.email === e.target.value);
        if (matchedUser) {
            e.target.setCustomValidity('An account by this email already exists')
        } else{
            e.target.setCustomValidity('');
        }
    }
    return (
        <div className='signup-page'>
        <h2 style={{textAlign:'center'}}>Sign Up</h2>
        <Form method='post' className='signup-form'>
            <div className='name-wrap'>
                <div>
                    <label>First Name</label>
                    <input type="text" name='fname' required placeholder='Enter your first name'></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name='lname' required placeholder='Enter your last name'></input>
                </div>
            </div>
            <label>Email Address</label>
            <input type='email' name='email' onChange={handleEmail} required placeholder='Enter your email'></input>
            <label>Password</label>
            <input type='password' name='password' required ref={passwordRef} placeholder='Enter your password' minLength='8'></input>
            <label>Confirm Password</label>
            <input type='password' required name='confirmPass' onChange={handlePassword} placeholder='Re-enter your password'></input>
            <button type='submit'>Sign up</button>
        </Form>
        </div>
    )
}
export async function action({request}) {
    const formData = await request.formData();
    const userData =  Object.fromEntries(formData);
    const users = JSON.parse(localStorage.getItem('users')) || [];
    userData.id = users.length;
    users.push(userData);
    localStorage.setItem('users',JSON.stringify(users) )
    return redirect('/login');
}
