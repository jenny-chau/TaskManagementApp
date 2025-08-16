import type {Task} from "./Task";

export type TaskActions = 
    | { type: 'ADD_TASK'; payload: Task}
    | { type: 'DELETE_TASK'; payload: number}
    | { type: "UPDATE_TASK"; payload: Task };
