import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h3>Sign In</h3>
                </div>
                <div className="card-body">
                    <form id="login-form" method='POST'>
                        <div className='field'>
                            <label className='field-label' htmlFor='username'>Username</label>
                            <input type="text" className="form-control" name='username' placeholder="username" />
                        </div>
                        <div className='field'>
                            <label className='field-label' htmlFor='password'>Password</label>
                            <input type="password" className="form-control" name='password' placeholder="password" />
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