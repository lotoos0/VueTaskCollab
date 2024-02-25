import { default } from './TaskForm.vue';
<template>
    <div>
        <h3>{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <p>Task deadline: {{ task.deadline }}</p>
        <p>Priority: {{ task.priority }}</p>
        <p>Assigned To: {{ task.assignedTo }}</p>

        <button @click="handleTaskClick">Details</button>
    </div>
</template>

<script>

export default {
    props: {
        task: {
            type: Object,
            required: true,
        },
    },
    methods: {
        handleTaskClick() {
            // otworz szczegoly zadania etc.

            this.$emit('task-click', this.task);
        },
    },
};
</script>

<style scoped>

</style>