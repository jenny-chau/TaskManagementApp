import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import type { Task } from "./Task";
import { useTaskContext } from "./TaskContext";

interface TaskObjectNoId {
    "title": string; 
    "description": string; 
    "due": string;
    "complete": boolean;
}

const AddTaskModal:React.FC = () => {
    const {state, dispatch} = useTaskContext();  
    const [show, setShow] = useState<boolean>(false);
    const [formData, setFormData] = useState<TaskObjectNoId>({
        title: "",
        description: "",
        due: "",
        complete: false
    });    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.name === "complete") {
            setFormData({ ...formData, [e.target.name]: e.target.value === "true" });
        }
        else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add new item
        const newTask: Task = {...formData, id: (state.tasks.length+1)};
        dispatch({type: "ADD_TASK", payload: newTask})
        console.log('Task added:', formData);
        setFormData({title: "",
            description: "",
            due: "",
            complete: false})
        handleClose(); // Close modal after submission
    };

    return (
        <div>
            <Button className='btn-primary m-3' onClick={handleShow}>
                Add Task
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
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className='m-1'>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddTaskModal;