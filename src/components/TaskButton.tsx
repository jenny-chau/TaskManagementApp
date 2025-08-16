import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const TaskButton: React.FC = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/tasks');
    }
    return(
        <Button onClick={handleRedirect} className='btn-success'>
            Tasks
        </Button>
    )
}

export default TaskButton;