import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout/PageLayout";
import TaskList from "./TaskList";
import AddTaskModal from "../Modals/AddTaskModal";

const TasksPage:React.FC = () => {
    const {user, isAuthenticated} = useAuth0();  
    if (!isAuthenticated) {
        return <div>Not Authenticated</div>
    }

    if (!user) {
        return <div>User not found</div>
    }

    return (
        <PageLayout>
            <h1 className="m-2"><strong>Tasks</strong></h1>
            <AddTaskModal/>
            <TaskList/>
        </PageLayout>
    )
}

export default TasksPage;