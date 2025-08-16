import { useReducer } from "react";
import TaskReducer from "./TaskReducer";
import { TaskContext } from './TaskContext';

type TaskProviderProps = {children: React.ReactNode};

const TaskProvider:React.FC<TaskProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(TaskReducer, {tasks: []})
    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;