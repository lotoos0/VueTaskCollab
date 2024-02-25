<template>
    <div>
        <h2>Admin Panel</h2>
        <button @click="handleDeleteTask">Delete Task</button>
        <button @click="handleDeleteComment">Delete Comment</button>
    </div>  
</template>

<script>
export default {
    methods: {
        handleDeleteTask() {
            this.$emit('delete-task');
        },
        handleDeleteComment() {
            this.$emit('delete-comment');
        },
    },
};
</script>