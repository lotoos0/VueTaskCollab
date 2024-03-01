<script lang="ts">
import { defineComponent } from 'vue';
import type { TaskListProps } from './TaskList.vue.d';
import type { Task } from './TaskForm.vue.d';
import type { PropType } from 'vue';

export default defineComponent({
    props: {
        tasks: {
            type: Array as PropType<Task[]>,
            default: () => [],
        },
    },
    methods: {
        handleTaskClick(ClickedTask: Task) {
            console.log("Clicked Task: ", ClickedTask);
        },
    },
})
</script>

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

<style></style>