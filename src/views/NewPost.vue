<template>
    <div>
        <h1 class="color-red" style="text-align: center; font-size: 2.5em">New Post</h1>
        <div class="container">
            <div class="col-md-12 " v-for="post in posts" :key="post.id">
                <router-link :to="{ name:'detail-post',params:{ id: post.id} }"><h1 v-text="post.title"></h1></router-link>
                <p v-text="post.content"></p>
                <div>
                    <b v-text="onPosted(post.created_at)"></b><p class="label float-right text-blue"><router-link :to="{ name:'detail-post',params:{id:post.id} }">SEE MORE</router-link></p>
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
                posts:[]
            }
        },
        created(){
            this.getPosts();
        },
        methods:{
            getPosts(){
                var vm = this;
                axios.get('http://homestead.test/index')
                    .then(function (response) {
                        vm.posts = response.data.posts.data;
                    }).catch(error => console.log(error));
            },
            onPosted(created_at){
                moment(String(created_at)).format('YYYY/MM/DD hh:mm');
                return moment(created_at, "YYYY/MM/DD hh:mm").fromNow();
            }
        }

    }
</script>

<style lang="scss" scoped>
    .text-blue{
        color: #00d1b2;
    }
</style>
