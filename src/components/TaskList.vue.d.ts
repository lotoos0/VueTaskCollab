import { PropType } from 'vue';
import { Task } from './TaskForm.vue';



export interface TaskListProps {
    tasks: Task[];
}

export default interface TaskList1 {
    props: {
        tasks: {
            type: PropType<Task[]>;
            default: () => Task[];
        };
    };
    methods: {
        handleTaskClick(clickedTask: Task): void;
    };
}