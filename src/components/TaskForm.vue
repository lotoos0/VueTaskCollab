<template>
    <div>
        <h2>Add New Task</h2>
        <form @submit.prevent="handleSubmit">
            <label for="title">Title: </label>
            <input v-model="newTask.title" type="text" id="title" placeholder="Here your Task Title" required />

            <label for="description">Description: </label>
            <textarea v-model="newTask.description" id="description" rows="4" placeholder="Here is your description for Task!" required />

            <label for="deadline">Deadline: </label>
            <input v-model="newTask.deadline" type="data" id="deadline" placeholder="Add deadline : 22-12-2023" required/>

            <label for="priority">Priority: </label>
            <select v-model="newTask.priority" id="priority" required>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <label for="assignedTo">Assigned to: </label>
            <input v-model="newTask.assignedTo" type="text" id="assignedTo" placeholder="Here will be users to choose" required />

            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
                priority: 'medium',
                assignedTo: '',
            };
        },
    },
});
</script>

<style>
        body {
            background-color: blueviolet;
        }

        h2 {
            margin-bottom: 1rem;
            font-weight: bolder;
            color: #ff8737;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            border: 2px solid #727272;
            padding:  1.1rem;
            background-color: #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
        }

        label {
            font-weight: bold;
        }

        input,
        textarea,
        select {
            padding: 0.5rem;
            border-radius: 4px;
            border: 1px solid #ccc;
        }

        button {
            padding: 0.5rem 1rem;
            background-color: blue;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>