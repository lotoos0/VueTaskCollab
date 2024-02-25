import { Task } from './TaskForm.vue';

export interface TaskListProps {
    tasks: Task[];
}

export default interface TaskList {
    props: TaskListProps;
    methods: {
        handleTaskClick(clickedTask: Task): void;
    };
}