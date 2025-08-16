import { Container } from 'react-bootstrap';
import TaskCard from './TaskCard'
import { useTaskContext } from '../TaskReducerContext/TaskContext';

const TaskList:React.FC = () => {
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