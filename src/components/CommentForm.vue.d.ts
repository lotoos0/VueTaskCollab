import { defineComponent } from 'vue';

export interface NewComment {
  text: string;
  author: string;
}

export default defineComponent({
  data() {
    return {
      newComment: {
        text: '',
        author: '',
      } as NewComment,
    };
  },
  methods: {
    handleSubmit(): void {
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
    clearForm(): void {
      this.newComment = {
        text: '',
        author: '',
      };
    },
  },
});
