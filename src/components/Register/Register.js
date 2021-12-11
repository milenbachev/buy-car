import {Link} from 'react-router-dom';

function Register() {
    return (
        <div className="container">
        <div className="card">
            <div className="card-header">
                <h3>Register</h3>
            </div>
            <div className="card-body">
                <form id="register-form" method='POST'>
                    <div className='field'>
                        <label className='field-label' htmlFor='username'>Username</label>
                        <input type="text" className="form-control" name='username' />
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
                        <input type="submit" value="Register" className="btn" />
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