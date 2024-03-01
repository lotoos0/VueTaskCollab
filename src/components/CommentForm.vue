<template>
    <div>
        <h4>Add Comment</h4>
        <form @submit.prevent="handleSubmit">
            <label for="commentText">Comment content: </label>
            <textarea v-model="newComment.text" id="commentText" rows="4" required></textarea>

            <label for="commentAuthor">Author: </label>
            <input v-model="newComment.author" type="text" id="commentAuthor" required />

            <button type="submit">Add Comment</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      newComment: {
        text: '',
        author: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.validateForm()) {
        // Tutaj przekaż nowy komentarz do rodzica lub wykonaj inne operacje

        this.$emit('add-comment', this.newComment);

        this.clearForm();
      }
    },
    validateForm(): boolean {
      const { text, author } = this.newComment;

      const validations = [text.trim(), author.trim()];
      return validations.every(Boolean);
    },
    clearForm() {
      this.newComment = {
        text: '',
        author: '',
      };
    },
  },
});
</script>
