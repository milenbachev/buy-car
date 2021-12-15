import {createContext, useState} from 'react';

export const AuthContext = createContext();

const initialCreate = ({
    _id: '',
    email: '',
    accessToken: ''
  })


  export const AuthProvider = ({
      children
  }) => {
      const [user, setUser] = useState(initialCreate)

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