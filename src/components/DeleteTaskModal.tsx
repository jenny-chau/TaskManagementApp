import { useState } from "react"
import { Button, Modal } from "react-bootstrap";
import { useTaskContext } from "./TaskContext";

interface DeleteTaskModalProps {
    task_id: number;
    onClick?: () => void
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({task_id, onClick}) => {
    const [show, setShow] = useState<boolean>(false);
    const {dispatch} = useTaskContext();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleDelete = () => {
        // Delete task
        dispatch({type: "DELETE_TASK", payload: task_id})
        console.log(`successfully deleted task ${task_id}`)
        if (onClick) (
            onClick()
        )

        setShow(false);
    }

    return (
        <div>
            <Button className='btn-danger m-1' onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className='m-1'>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete} className='m-1'>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteTaskModal;