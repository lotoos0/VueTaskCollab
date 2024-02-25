import { default } from './TaskItem.vue';
<template>
    <div>
        <h4>Comments</h4>
        <ul>
            <li v-for="comment in comments" :key="comment.id">
                {{ comment.text }} - Author: {{ comment.author }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        comments: {
            type: Array,
            default: () => [];
        },
    },
};
</script>