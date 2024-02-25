export interface Task {
    title: string;
    description: string;
    deadline: string;
    priority: "low" | "medium" | "high";
    assignedTo: string;
}

export default interface TaskForm {
    data(): {
        newTask: Task;
    };
    methods: {
        validateForm(): boolean;
        handleSubmit(): void;
        clearForm(): void;
    };
}