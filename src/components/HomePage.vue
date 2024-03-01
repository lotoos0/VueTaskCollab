<script setup lang="ts">


// import AdminPanel from "@/components/AdminPanel.vue";

import type Task  from "@/components/TaskForm.vue";

import { defineComponent, ref } from 'vue';
import { NewComment } from './CommentForm.vue';

import TaskForm from "./TaskForm.vue";
import TaskList from "./TaskList.vue";
import CommentForm from "./CommentForm.vue";
import CommentList from "./CommentList.vue";


const tasks = ref<typeof Task[]>([]);
const selectedTask = ref<typeof Task | null>(null);
const selectedTaskComments = ref<NewComment[]>([]);

const handleAddTask = (newTask: typeof Task) => {
  tasks.value.push(newTask);
};

const handleTaskClick = (clickedTask: typeof Task) => {
  selectedTask.value = clickedTask;
  selectedTaskComments.value = []; // reset list comm
};

const handleAddComment = (newComment: NewComment) => {
  if (selectedTask.value) {
    selectedTaskComments.value.push(newComment);
  }
};

const handleDeleteTask = () => {
  if (selectedTask.value) {
    const taskIndex = tasks.value.indexOf(selectedTask.value);
    if (taskIndex !== -1) {
      tasks.value.splice(taskIndex, 1);
      selectedTask.value = null;
      selectedTaskComments.value = [];
    }
  }
};

const handleDeleteComment = () => {
  if (selectedTask.value && selectedTaskComments.value.length > 0) {
    selectedTaskComments.value.pop();
  }
};
</script>

<template>
  <div id="app">
    <h1>Task Management App</h1>

    <TaskForm @add-task="handleAddTask" />

    <TaskList :Task="tasks" @task-click="handleTaskClick" />

    <CommentForm @add-comment="handleAddComment" />

    <CommentList :comments="selectedTaskComments" />

    <AdminPanel
      @delete-task="handleDeleteTask"
      @delete-comment="handleDeleteComment"
    />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-size: 2em;
}
</style>
