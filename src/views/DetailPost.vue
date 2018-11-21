<template>
    <div class="container ">
        <h1 class="color-red" style="text-align: center; font-size: 2.5em">Detail Post</h1>
        <div class="col-md-12 ">
            <h1 v-text="post.title"></h1>
            <p v-text="post.content"></p>
            <div>
                <span class="badge">Posted 2012-08-02 20:47:04</span><p class="label float-right text-blue"></p>
            </div>
        </div>
        <hr>
        <comment></comment>
        <post-comment></post-comment>
    </div>
</template>

<script>
    import Comment from './Comment'
    import PostComment from './PostComment';
    export default {
        name: "DetailPost",
        data(){
            return{
                post: { id:1,title: 'Alice in Wonderland, part dos',content:'\'You ought to be ashamed of yourself for asking such a simple question,\' added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, \'Drive on, old fellow! Don\'t be all day about it!\' and he went on in these words: \'Yes, we went to school in the sea, though you mayn\'t believe it—\' \'I never said I didn\'t!\' interrupted Alice. \'You did,\' said the Mock Turtle.'},
            }
        },
        components:{
            Comment,PostComment
        }
    }
</script>

<style scoped>

</style>
