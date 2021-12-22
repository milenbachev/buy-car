import {useNavigate} from 'react-router-dom';
import {useContext, useEffect} from 'react';

import {AuthContext} from '../../contexts/AuthContext.js';
import {NotificationContext, types} from '../../contexts/NotificationContext';
import * as authService from '../../services/authService.js';

function Logout(){
    const navigate = useNavigate();
    const{user, logout} = useContext(AuthContext);
    const { addNotification} = useContext(NotificationContext)

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout()
                addNotification('You logout successfuly', types.success)
                navigate('/')
            })
    }, [navigate, logout, user.accessToken, addNotification])
    
    return(
       null
    )
}

export default Logout;