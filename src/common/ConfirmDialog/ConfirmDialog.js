import { Modal, Button } from 'react-bootstrap';

const ConfirmDialog = ({
    show,
    onClose,
    onSave
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Dialog >
                <Modal.Header closeButton>
                    <Modal.Title>Delete car</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to delete this car!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>Return</Button>
                    <Button variant="primary" onClick={onSave}>Delete</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default ConfirmDialog