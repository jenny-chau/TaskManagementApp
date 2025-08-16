import type {TaskActions} from "./TaskActions";
import type { TaskState } from "./TaskState";

const TaskReducer = ( state: TaskState, action: TaskActions): TaskState => {
    switch (action.type) {
        case "ADD_TASK":
            return {...state, tasks: [...state.tasks, action.payload]};
        case 'DELETE_TASK':
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                task.id === action.payload.id ? action.payload : task
            ),
    };
        default:
            return state;
    }
}

export default TaskReducer;