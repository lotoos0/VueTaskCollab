import { defineComponent } from 'vue';
import type { NewComment } from "./CommentForm.vue";

export interface CommentListProps {
  comments: NewComment[];
}

export default defineComponent({
  props: {
    comments: {
      type: Array as () => CommentListProps['comments'],
      default: () => [],
    },
  },
  methods: {
    handleCommentList(): void {
      console.log("handle-Comment-List");
    },
  },
});

