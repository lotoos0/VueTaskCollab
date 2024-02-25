<template>
    <div>
        <h2>Add New Task</h2>
        <form @submit.prevent="handleSubmit">
            <label for="title">Title: </label>
            <input v-model="newTask.title" type="text" id="title" required />

            <label for="description">Description: </label>
            <textarea v-model="newTask.description" id="description" rows="4" required />

            <label for="deadline">Deadline: </label>
            <input v-model="newTask.deadline" type="data" id="deadline" required/>

            <label for="priority">Priority: </label>
            <select v-model="newTask.priority" id="priority" required>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <label for="assignedTo">Assigned to: </label>
            <input v-model="newTask.assignedTo" type="text" id="assignedTo" required />

            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
export default: {
    data() {
        return {
            newTask: {
                title: '',
                description: '',
                deadline: '',
                priority: 'medium', 
                assignedTo: '',
            },
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


        }

        handleSubmit() {
            //Tutah przekazujemy nowe zadanie do parenta lub other
            //emitujemy zdarzenie 'add-task' z nowym zadaniem.
            this.$emit('add-task', this.newTask);

            this.clearForm(); // czyszonko po zadaniu:) 
        },
        clearForm() {
            this.newTask = {
                title: '',
                description: '',
                deadline: '',
                priority: 'medium',
                assignedTo: '',
            };
        },
    },
};
</script>

<style scoped>

</style>