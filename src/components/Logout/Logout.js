import {useNavigate} from 'react-router-dom';
import {useContext, useEffect} from 'react';

import {AuthContext} from '../../contexts/AuthContext.js';
import * as authService from '../../services/authService.js';

function Logout(){
    const navigate = useNavigate();
    const{user, logout} = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout()
                navigate('/')
            })
    }, [])
    
    return(
       null
    )
}

export default Logout;