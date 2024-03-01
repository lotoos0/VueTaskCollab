<!-- import { default } from './TaskItem.vue'; -->
<template>
  <div>
    <h4>Comments</h4>
    <ul>
      <li v-for="(comment) in comments" :key="comment.id">
        {{ comment.text }} - Author: {{ comment.author }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

interface CommentType {
  id: number;
  text: string;
  author: string;
}

export default defineComponent({
  props: {
    comments: {
      type: Array as PropType<CommentType[]>,
      default: () => [],
    },
  },
  methods: {
    handleCommentList(): void {
      console.log("handle-Comment-List");
    },
  },
});
</script>

