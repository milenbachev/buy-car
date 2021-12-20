import {createContext} from 'react';

import useLocalStorage from '../hook/useLocalStorage';

export const AuthContext = createContext();

const initialCreate = ({
    _id: '',
    email: '',
    accessToken: ''
  })


  export const AuthProvider = ({
      children
  }) => {
      const [user, setUser] = useLocalStorage('user', initialCreate)

      const login = (authDate) =>{
        setUser(authDate)
      }

      const logout = () => {
        setUser(initialCreate)
      }

      return(
          <AuthContext.Provider value={{user, login, logout, isAuthenticated: Boolean(user.email)}}>
              {children}
          </AuthContext.Provider>
      )
  }