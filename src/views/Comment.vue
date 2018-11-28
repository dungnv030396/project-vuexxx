<template>
    <div>
        <article class="media" v-for="(comment,index) in comments" :key="index">
            <avatar></avatar>
            <div class="media-content">
                <div class="content">
                    <strong v-text="user.name"></strong>
                    <br>{{ comment.content }}
                    <br>
                    <small><a>Like</a> · <a @click="replyClick(comment.id)">Reply</a> · <span
                            v-text="onPosted(comment.created_at)"></span></small>
                </div>
                <div v-if="reply[0].length > 0">
                    <reply-comment :reply="reply" :comment_id="comment.id"></reply-comment>
                </div>
                <post-reply-comment v-if="showReplyComment && replyID===comment.id" :comment_id="comment.id"></post-reply-comment>
            </div>
        </article>
    </div>
</template>

<script>
    import ReplyComment from './ReplyComment';
    import PostReplyComment from "./PostReplyComment";
    import Avatar from "@/components/Avatar";

    export default {
        name: "Comment",
        props: ['comments', 'user', 'reply'],
        components: {
            PostReplyComment,
            ReplyComment,
            Avatar,
        },
        data() {
            return {
                showReplyComment: false,
                replyID:'',
            }
        },
        methods: {
            onPosted(created_at) {
                moment(created_at).format('YYYY/MM/DD hh:mm');
                return moment(created_at, "YYYY/MM/DD hh:mm").fromNow();
            },
            replyClick(id){
                if (this.showReplyComment){
                    if (this.replyID === id){
                        this.showReplyComment= false;
                    }else{
                        this.replyID = id;
                    }
                }else{
                    this.showReplyComment = true;
                    this.replyID = id;
                }
            }
        }
    }
</script>

<style scoped>

</style>
