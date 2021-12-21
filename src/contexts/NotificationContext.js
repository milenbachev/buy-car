import { createContext, useState, useCallback } from "react";

export const NotificationContext = createContext();

export const types = {
    error: 'danger',
    warning: 'warning',
    info: 'info',
    success: 'success'
}

export const NotificationProvider = ({
    children
}) => {
   const [notification, setNotification] = useState({show: false, message: '', type: types.error})

   const addNotification = useCallback((message, type = types.error) => {
       setNotification({show: true, message, type})
   }, [])

    return(
        <NotificationContext.Provider value={{notification, addNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}

//export const useNotificationContext = () => {
    //const state = useContext(NotificationContext)

    //return state
//}