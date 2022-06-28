import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { email, value } = event.target;

    setFormState({ 
      ...formState,
      [email]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: ''
    })
  }


  return (
    <section className="login-page">
      <h1 className="login-title">Welcome, please log in</h1>
      <div className="login">
        <form onSubmit={handleFormSubmit} action="" method="get" className="login-form">
          <div>
            <label className="login-label" for="email">
              Email:
            </label>
            <input type="text" name="email" id="email" value={formState.email} onChange={handleChange} />
          </div>
          <div className="">
            <label className="login-label" for="password">
              Password:
            </label>
            <input type="text" name="password" id="password" value={formState.password} onChange={handleChange} />
          </div>
          <div className="login-btn-div">
            <input className="login-btn" type="submit" value="Login" />
          </div>
        </form>
        {error && <div>Invalid credentials.</div>}
      </div>
    </section>
  );
}

export default Login;
