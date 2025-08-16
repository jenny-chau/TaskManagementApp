import { createContext, useContext } from 'react';
import type { TaskState } from './TaskState';
import type { TaskActions } from './TaskActions';

interface TaskContextValue {
    state: TaskState;
    dispatch: React.Dispatch<TaskActions>;
}

export const TaskContext = createContext<TaskContextValue | undefined>(undefined);

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};

export default TaskContext;