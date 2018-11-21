<template>
    <div>
        <h1 class="color-red" style="text-align: center; font-size: 2.5em">New Post</h1>
        <div class="container ">
            <div class="col-md-12 " v-for="post in posts" :key="post.id">
                <router-link :to="{ name:'detail-post',params:{id:post.id} }"><h1 v-text="post.title"></h1></router-link>
                <p v-text="post.content"></p>
                <div>
                    <span class="badge">Posted 2012-08-02 20:47:04</span><p class="label float-right text-blue"><router-link :to="{ name:'detail-post',params:{id:post.id} }">SEE MORE</router-link></p>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewPost",
        props:['to'],
        data(){
            return{
                posts:[
                    { id:1,title: 'Alice in Wonderland, part dos',content:'\'You ought to be ashamed of yourself for asking such a simple question,\' added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, \'Drive on, old fellow! Don\'t be all day about it!\' and he went on in these words: \'Yes, we went to school in the sea, though you mayn\'t believe it—\' \'I never said I didn\'t!\' interrupted Alice. \'You did,\' said the Mock Turtle.'},
                    { id:2,title: 'Revolution has begun!',content:'\'I am bound to Tahiti for more men.\' \'Very good. Let me board you a moment—I come in peace.\' With that he leaped from the canoe, swam to the boat; and climbing the gunwale, stood face to face with the captain. \'Cross your arms, sir; throw back your head. Now, repeat after me. As soon as Steelkilt leaves me, I swear to beach this boat on yonder island, and remain there six days. If I do not, may lightning strike me!\'A pretty scholar,\' laughed the Lakeman. \'Adios, Senor!\' and leaping into the sea, he swam back to his comrades.' },
                    { id:3,title: 'Alice in Wonderland, part dos',content:'\'You ought to be ashamed of yourself for asking such a simple question,\' added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, \'Drive on, old fellow! Don\'t be all day about it!\' and he went on in these words: \'Yes, we went to school in the sea, though you mayn\'t believe it—\' \'I never said I didn\'t!\' interrupted Alice. \'You did,\' said the Mock Turtle.'},
                ]
            }
        },

    }
</script>

<style lang="scss" scoped>
    .text-blue{
        color: #00d1b2;
    }
</style>
