import { NewComment } from "./CommentForm.vue";

export interface CommentListProp {
    comments: NewComment[];
}

export default interface CommentList {
    props: CommentListProp;
    methods: {
        handleCommentList: void;
    };
}