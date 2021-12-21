import {Toast} from 'react-bootstrap';
import {useContext} from 'react';

import { NotificationContext} from '../../contexts/NotificationContext';

function Notification() {
    const {notification} = useContext(NotificationContext);

    if(!notification.show){
        return null;
    }

    return (
        <Toast className="d-inline-block m-1" bg={notification.type} >
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body className={notification === 'Dark' && 'text-white'}>
               {notification.message}
            </Toast.Body>
        </Toast>
    )
}

export default Notification;