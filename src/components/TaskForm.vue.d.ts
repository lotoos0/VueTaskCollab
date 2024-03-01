import { defineComponent } from 'vue';

export interface Task {
    title: string;
    description: string;
    deadline: string;
    priority: "low" | "medium" | "high";
    assignedTo: string;
    id: number;
}

export default defineComponent({
    data() {
        return {
            newTask: {
                title: '',
                description: '',
                deadline: '',
                priority: 'medium' as const,
                assignedTo: '',
            } as Task,
        };
    },
    methods: {
        validateForm() {
            const { title, description, deadline, assignedTo } = this.newTask;

            const errors = [
                !title.trim(),
                !description.trim(),
                !deadline.trim(),
                !assignedTo.trim(),
            ];

            return !errors.some(Boolean);
        },
        handleSubmit() {
            // Tutaj przekazujemy nowe zadanie do parenta lub innego komponentu
            // Emitujemy zdarzenie 'add-task' z nowym zadaniem.
            this.$emit('add-task', this.newTask);

            this.clearForm(); // Czyszczenie formularza
        },
        clearForm() {
            this.newTask = {
                title: '',
                description: '',
                deadline: '',
                priority: 'medium' as const,
                assignedTo: '',
            } as Task;
        },
    },
});