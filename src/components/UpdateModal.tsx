import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import type { Task } from "./Task";
import DeleteTaskModal from "./DeleteTaskModal";
import { useTaskContext } from "./TaskContext";

export interface TaskObjectNoId {
    "id": number,
    "title": string; 
    "description": string; 
    "due": string;
    "complete": boolean;
}

interface UpdateModalProps {
    task: Task
    onClick?: () => void
}

const UpdateModal:React.FC<UpdateModalProps> = ({task, onClick}) => {
    const {dispatch} = useTaskContext();  
    const [show, setShow] = useState<boolean>(false);
    const [formData, setFormData] = useState<TaskObjectNoId>({
        id: task.id,
        title: task.title,
        description: task.description,
        due: task.due,
        complete: task.complete
    });    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleDelete = () => {
        setShow(false)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.name === "complete") {
            setFormData({ ...formData, [e.target.name]: e.target.value === "true" });
        }
        else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Update item
        const updatedTask: Task = {...formData};
        dispatch({type: "UPDATE_TASK", payload: updatedTask})
        console.log('Task added:', formData);

        console.log('Task Updated:', formData);
        if (onClick) {onClick();}
        handleClose(); // Close modal after submission
    };

    return (
        <div>
            <Button className='btn-warning m-1' onClick={handleShow}>
                Update
            </Button>

            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Task Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="due"
                                value={formData.due}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Completed?</Form.Label>
                            <Form.Check
                                type="radio"
                                label="Completed"
                                name="complete"
                                id="completed"
                                value="true"
                                checked={formData.complete === true}
                                onChange={handleChange}
                                />
                                <Form.Check
                                type="radio"
                                label="In Progress"
                                name="complete"
                                id="incomplete"
                                value="false"
                                checked={formData.complete === false}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="warning" type="submit">
                            Update
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className='m-1'>
                        Close
                    </Button>
                    <DeleteTaskModal task_id={task.id} onClick={handleDelete}/>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UpdateModal;