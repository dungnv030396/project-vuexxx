<template>
    <div>
            <article class="media" v-for="(item,index) in reply" :key="index" v-if="comment_id===item[0].comment_id">
                <figure class="media-left">
                    <p class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong v-text="item[0].user.name"></strong>
                            <br>
                            <span>{{ item[0].content }}</span>
                            <br>
                            <small><a>Like</a> · <span v-text="onPosted(item[0].created_at)"></span></small>
                        </p>
                    </div>
                    <!--<article class="media">-->
                    <!--Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.-->
                    <!--</article>-->

                    <!--<article class="media">-->
                    <!--Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.-->
                    <!--</article>-->
                </div>
        </article>
    </div>
</template>

<script>
    export default {
        name: "ReplyComment",

        props: ['reply', 'comment_id'],

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
