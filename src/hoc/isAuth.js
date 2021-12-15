import {useContext} from 'react';
import {Navigate} from 'react-router-dom';

import {AuthContext} from '../contexts/AuthContext';

export const isAuth = (Component) => {
    const WrapperComponent = (props) => {
        const {isAuthenticated} = useContext(AuthContext)

        return isAuthenticated
            ? <Component {... props} />
            : <Navigate to='/login' /> 
    }

    return WrapperComponent
}

