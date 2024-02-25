<template>
    <div>
        <h2>Task List</h2>
        <ul>
            <li v-for="task in tasks" :key="task.id" @click="handleTaskClick(task)">
                {{ task.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        tasks: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        handleTaskClick(clickedTask) {
            // wywolujemy metode
            console.log('Clicked Task: ', clickedTask);
        },
    },
};
</script>

<style scoped>
</style>