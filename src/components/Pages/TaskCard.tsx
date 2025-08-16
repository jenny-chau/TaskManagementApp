import { Card } from "react-bootstrap";
import DeleteTaskModal from "../Modals/DeleteTaskModal";
import DetailsModal from "../Modals/DetailsModal";
import UpdateModal from "../Modals/UpdateModal";
import type { Task } from "../TaskReducerContext/Task";

const TaskCard: React.FC<Task> = (task) => {
    return (
        <Card className="m-3" 
            style={{
                backgroundColor: task.complete ? 'rgb(188, 247, 188)' : 'rgb(247, 243, 188)',
            }}>
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>
                    {/* Description: {task.description} <br/> */}
                    <strong>Due Date:</strong> {task.due} <br/>
                    <strong>Status:</strong> {task.complete ? "Complete" : "In Progress"}
                </Card.Text>
                <div className='d-flex flex-wrap justify-content-center'>
                    <DetailsModal {...task}/>
                    <UpdateModal task={task}/>
                    <DeleteTaskModal task_id={task.id}/>
                </div>
            </Card.Body>
        </Card>
    )
}

export default TaskCard;