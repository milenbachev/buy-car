import { Link, useNavigate } from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';

import {AuthContext} from '../../contexts/AuthContext.js';
import * as authService from '../../services/authService.js';

import './Login.css';

function Login() {
    const initialValue = {
        email: "",
        password: ""
    }
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const {login} = useContext(AuthContext);

    const formHandelChange = (e) => {
       const {name, value} = e.target;
       setFormValue({...formValue, [name]: value})
    }

    useEffect(() => { 
        console.log(formError)
        if(Object.keys(formError).length === 0){
        
        }
    }, [formError])
    const validate = (values) => {
        const errors = {};

        if(!values.email){
            errors.email = 'Email is required'
        }
        if(!values.password){
            errors.password = 'Password is required'
        }else if(values.password.length < 4){
            errors.password = 'Password min lengt is 4 sumbols'
        }else if(values.password.length > 12){
            errors.password = 'Password max length is 12 sumbols'
        }
        return errors
    }
    const  onLoginHandler = (e) => {
        e.preventDefault();

        setFormError(validate(formValue))

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
            <div className="card-login">
                <div className="card-header">
                    <h3>Sign In</h3>
                </div>
                <div className="card-body">
                    <form id="login-form" method='POST' onSubmit={onLoginHandler}>
                        <div className='field'>
                            <label className='field-label' htmlFor='email'>Email</label>
                            <input type="text" className="form-control" name='email' value={formValue.email} onChange={formHandelChange}/>           
                        </div>
                        <p className='p-login'>{formError.email}</p>
                        <div className='field'>
                            <label className='field-label' htmlFor='password'>Password</label>
                            <input type="password" className="form-control" name='password' value={formValue.password} onChange={formHandelChange}/> 
                        </div>
                        <p className='p-login'>{formError.password}</p>
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn-login" />
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <div className="card-footer-links">
                        Don't have an account?  <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
