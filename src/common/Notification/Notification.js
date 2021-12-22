import {Toast} from 'react-bootstrap';
import {useContext} from 'react';

import { NotificationContext} from '../../contexts/NotificationContext';

function Notification() {
    const {notification, hidenNotification} = useContext(NotificationContext);

    if(!notification.show){
        return null;
    }

    return (
        <Toast className="d-inline-block m-1" bg={notification.type} onClose={hidenNotification} >
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">{notification.type}</strong>
            </Toast.Header>
            <Toast.Body >
               {notification.message}
            </Toast.Body>
        </Toast>
    )
}

export default Notification;