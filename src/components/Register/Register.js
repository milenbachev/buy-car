import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext.js';
import {NotificationContext, types} from '../../contexts/NotificationContext'
import * as authService from '../../services/authService.js';

import './Register.css';

function Register() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const {addNotification} = useContext(NotificationContext)

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.register(email, password)
            .then(authData => {
                login(authData)
                addNotification('You have registered successfully', types.success)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="container-register">
            <div className="card-register">
                <div className="card-header">
                    <h3>Register</h3>
                </div>
                <div className="card-body">
                    <form id="register-form" method='POST' onSubmit={onRegisterHandler}>
                        <div className='field'>
                            <label className='field-label' htmlFor='email'>Email</label>
                            <input type="text" className="form-control" name='email' />
                        </div>
                        <div className='field'>
                            <label className='field-label' htmlFor='password'>Password</label>
                            <input type="password" className="form-control" name='password' />
                        </div>
                        <div className='field'>
                            <label className='field-label' htmlFor='repet-password'>Confirm</label>
                            <input type="password" className="form-control" name='repet-password' />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Register" className="btn-register" />
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <div className="card-footer-links">
                        You have an account?  <Link to="/login">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;