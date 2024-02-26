<template>
  <div id="app">
    <h1>Task Management App</h1>

    <TaskForm @add-task="handleAddTask" />

    <TaskList :tasks="tasks" @task-click="handleTaskClick" />

    <CommentForm @add-comment="handleAddComment" />

    <CommentList :comments="selectedTaskComments" />

    <AdminPanel
      @delete-task="handleDeleteTask"
      @delete-comment="handleDeleteComment"
    />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import type TaskForm from "@/components/TaskForm.vue";
import type TaskList from "@/components/TaskList.vue";
import type CommentForm from "@/components/CommentForm.vue";
import type CommentList from "@/components/CommentList.vue";
import type AdminPanel from "@/components/AdminPanel.vue";

import type { Task } from "./components/TaskForm.vue";
import type { NewComment } from './components/CommentForm.vue';
import { ref, type Ref } from 'vue';


const tasks: Ref<Task[]> = ref([]);
const selectedTask: Ref<Task | null> = ref(null);
const selectedTaskComments: Ref<NewComment[]> = ref([]);

const handleAddTask = (newTask: Task) => {
  tasks.value.push(newTask);
};

const handleTaskClick = (clickedTask: Task) => {
  selectedTask.value = clickedTask;
  selectedTaskComments.value = []; // reset list comm
};

const handleAddComment = (NewComment: NewComment) => {
  if (selectedTask.value) {
    selectedTaskComments.value.push(NewComment);
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

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}
</style>