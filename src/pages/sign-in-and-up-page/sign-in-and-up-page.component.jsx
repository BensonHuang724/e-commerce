import React from 'react';
import './sign-in-and-up-page.styles.scss';
const SignInAndSignUpPage = () => {
    return  <div className='sign-in'> 
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form> 
                    <label for='email'>Email</label>
                    <input name="email" type="email" required/>

                    <label for='password'>Password</label>
                    <input name="password" type="password" required/>

                    <button>Sign In</button>
                </form>
            </div>
}
export default SignInAndSignUpPage;