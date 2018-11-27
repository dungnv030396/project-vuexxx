<template>
    <div>
        <article class="media" v-for="(comment,index) in comments" :key="index">
            <avatar></avatar>
            <div class="media-content">
                <div class="content">
                    <strong v-text="user.name"></strong>
                    <br>{{ comment.content }}
                    <br>
                    <small><a>Like</a> · <a @click="showReplyComment = !showReplyComment">Reply</a> · <span
                            v-text="onPosted(comment.created_at)"></span></small>
                </div>
                <div v-if="reply[0].length > 0">
                    <reply-comment :reply="reply" :comment_id="comment.id"></reply-comment>
                </div>
                <post-comment v-if="showReplyComment"></post-comment>
            </div>
        </article>
    </div>
</template>

<script>
    import ReplyComment from './ReplyComment';
    import PostComment from "./PostComment";
    import Avatar from "@/components/Avatar";

    export default {
        name: "Comment",
        props: ['comments', 'user', 'reply'],

        data() {
            return {}
        },
        components: {
            PostComment,
            ReplyComment,
            Avatar,
        },
        data() {
            return {
                showReplyComment: false,
            }
        },
        methods: {
            onPosted(created_at) {
                moment(created_at).format('YYYY/MM/DD hh:mm');
                return moment(created_at, "YYYY/MM/DD hh:mm").fromNow();
            },
        }
    }
</script>

<style scoped>

</style>
