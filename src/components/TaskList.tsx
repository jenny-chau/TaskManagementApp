import { Container } from 'react-bootstrap';
import TaskCard from './TaskCard'
import { useTaskContext } from './TaskContext';

const TaskList:React.FC = () => {
    // const tasks_set = [
    //     {"id": 1,
    //         "title":"Do the dishes", 
    //         "description": "Do your dishes", 
    //         "due": "08/25/2025", 
    //         "complete": false},
    //     {"id": 2,
    //         "title":"Buy watermelon", 
    //         "description": "Go to Whole Foods to get watermelon", 
    //         "due": "08/25/2025", 
    //         "complete": false},
    //     {"id": 3,
    //         "title":"Fix the TV", 
    //         "description": "TV is broken, fix it", 
    //         "due": "07/25/2025", 
    //         "complete": true},
    // ]

    const {state} = useTaskContext();  
    

    return (
        <Container className='d-flex flex-wrap justify-content-center'>
            {state.tasks.map(task => (
                <div key={task.id}>
                    <TaskCard {...task}/>
                </div>
            ))}
        </Container>
    )
}

export default TaskList;