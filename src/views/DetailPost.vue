<template>
    <div class="container">
        <h1 class="color-red" style="text-align: center; font-size: 2.5em">Detail Post</h1>
        <div class="col-md-12 ">
            <h1 v-text="post.title"></h1>
            <p v-text="post.content"></p>
            <div>
                <b v-text="onPosted(post.created_at)"></b>
                <p class="label float-right text-blue"></p>
            </div>
        </div>
        <hr>
        <comment :comments="comments" :user="user" :reply="reply"></comment>
        <post-comment :post_id="post.id"></post-comment>
    </div>
</template>

<script>
    import Comment from './Comment'
    import PostComment from './PostComment';
    import EventBus from '@/event-bus';
    export default {
        name: "DetailPost",
        props:['status'],
        data() {
            return {
                post: {},
                comments:[],
                user:[],
                reply:{},
            }
        },
        components: {
            Comment, PostComment
        },
        created() {
            this.detailPost();
        },
        mounted(){
            EventBus.$on('post',this.detailPost);
        },
        methods: {
            detailPost() {
                var vm = this;
                axios.get('http://homestead.test/detail-post/' + this.$route.params.id)
                    .then(function (response) {
                        vm.post = response.data.detail;
                        vm.user = response.data.user;
                        vm.comments = response.data.comments;
                        vm.reply = response.data.reply;
                        // EventBus.$emit('loaded', 'accepted');
                    })
                    .catch(error => console.log(error));
            },
            onPosted(created_at){
                moment(created_at).format('YYYY/MM/DD hh:mm');
                return moment(created_at, "YYYY/MM/DD hh:mm").fromNow();
            },
        }
    }
</script>

<style scoped>

</style>
