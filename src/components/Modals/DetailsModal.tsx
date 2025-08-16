import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import type { Task } from "../TaskReducerContext/Task";
import DeleteTaskModal from "./DeleteTaskModal";
import UpdateModal from "./UpdateModal";

const DetailsModal:React.FC<Task> = (task) => {
    const [show, setShow] = useState<boolean>(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleEdit = () => {
        console.log('Task Updated (back in Details modal):', task);
    }
    const handleDelete = () => {
        setShow(false)
    }

    return (
        <div>
            <Button className='btn-info m-1' onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Task Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <strong>Title:</strong> {task.title} <br/>
                    <strong>Description:</strong> {task.description} <br/>
                    <strong>Due Date:</strong> {task.due} <br/>
                    <strong>Status:</strong> {task.complete ? "Complete" : "In progress"}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className="m-1">
                        Close
                    </Button>
                    <UpdateModal task={task} onClick={handleEdit}/>
                    <DeleteTaskModal task_id={task.id} onClick={handleDelete}/>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DetailsModal;