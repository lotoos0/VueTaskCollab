export interface NewComment {
    text: string;
    author: string;
}

export default interface CommentForm {
    data(): {
        newComment: NewComment;
    };
    methods: {
        handleSubmit(): void;
        validateForm(): boolean;
        clearForm(): void;
    };
}