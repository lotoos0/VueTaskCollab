<script>
export default {
    props: {
        comments: {
            type: Array,
            default: () => [];
        },
    },
    methods: {
        handleCommentList() {
            console.log("handle-Comment-List");
        }
    },
};
</script>