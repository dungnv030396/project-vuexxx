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
        props: ['status'],
        data() {
            return {
                post: {},
                comments: [],
                user: [],
                reply: {},
            }
        },
        components: {
            Comment, PostComment
        },
        created() {
            this.detailPost();
        },
        mounted() {
            EventBus.$on('post', this.detailPost);
        },
        methods: {
            async detailPost() {
                var vm = this;
                try {
                    const result = axios.get('http://homestead.test/detail-post/' + this.$route.params.id);
                    const {data} = await result;
                    if (data[0] === 200) {
                        vm.post = data.detail;
                        vm.user = data.user;
                        vm.comments = data.comments;
                        vm.reply = data.reply;
                    }
                } catch (error) {
                    console.log(error)
                }
                EventBus.$emit('posted', 'accepted');
            },
            onPosted(created_at) {
                moment(created_at).format('YYYY/MM/DD hh:mm');
                return moment(created_at, "YYYY/MM/DD hh:mm").fromNow();
            },
        }
    }
</script>

<style scoped>

</style>
