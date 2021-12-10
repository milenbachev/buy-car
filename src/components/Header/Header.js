import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <header className='header-conteiner'>
            <nav className="header-conteiner-nav">
                <div className="header-container-fluid">
                    <Link className="navbar" to="/">Buy-Car</Link>
                    <div className="header-conteiner-nav-div" >
                        <ul className="header-nav-ul">
                            <li className="header-nav-ul-li">
                                <Link className="header-nav-ul-li-item"  to="/">Home</Link>
                            </li>
                            <li className="header-nav-ul-li">
                                <Link className="header-nav-ul-li-item" to="/login">Login</Link>
                            </li>
                            <li className="header-nav-ul-li">
                                <Link className="header-nav-ul-li-item" to="/register">Register</Link>
                            </li>
                            <li className="header-nav-ul-li">
                                <Link className="header-nav-ul-li-item" to="/my-cars">My-cars</Link>
                            </li>
                            <li className="header-nav-ul-li">
                                <Link className="header-nav-ul-li-item" to="/create">Create</Link>
                            </li>
                            <li className="header-nav-ul-li">
                                <Link className="header-nav-ul-li-item" to="/logout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header