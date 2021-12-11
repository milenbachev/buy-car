import { Link, useNavigate } from 'react-router-dom';
import {useContext} from 'react';

import {AuthContext} from '../../contexts/AuthContext.js';
import * as authService from '../../services/authService.js';

import './Login.css';

function Login() {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    const  onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((response) => {

                login(response)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h3>Sign In</h3>
                </div>
                <div className="card-body">
                    <form id="login-form" method='POST' onSubmit={onLoginHandler}>
                        <div className='field'>
                            <label className='field-label' htmlFor='email'>Email</label>
                            <input type="text" className="form-control" name='email'/>
                        </div>
                        <div className='field'>
                            <label className='field-label' htmlFor='password'>Password</label>
                            <input type="password" className="form-control" name='password'/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn" />
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <div className="card-footer-links">
                        Don't have an account?  <Link to="/register">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;