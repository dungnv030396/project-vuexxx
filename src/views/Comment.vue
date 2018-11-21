<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <p v-for="comment in comments" :key="comment.id">
                    <strong v-text="comment.name"></strong>
                    <br v-text="comment.content">

                    <br>
                    <small><a>Like</a> · <a @click="showReplyComment = !showReplyComment">Reply</a> · 3 hrs</small>
                </p>
            </div>
            <reply-comment></reply-comment>
            <post-comment v-if="showReplyComment"></post-comment>
        </div>
    </article>

</template>

<script>
    import ReplyComment from './ReplyComment';
    import PostComment from "./PostComment";
    export default {
        name: "Comment",
        components:{
            PostComment,
            ReplyComment
        },
        data(){
            return{
                showReplyComment:false,
                content:'',
                name:'Barbara Middleton',
                postId:1,
                comments:[
                    {id:1,name:'Barbara Middleton',content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.'},

                ]
            }
        },
        methods:{
            addComment(){
                return comments.push(this.postId++ ,this.name,this.content);

            }
        }
    }
</script>

<style scoped>

</style>
