<template>
    <div>
        <div v-for="(items,index) in reply" :key="index" v-if="comment_id===items[0].comment_id">
        <article class="media" v-for="item in items">
                <avatar></avatar>
                <div class="media-content">
                    <div class="content">
                        <p >
                            <strong v-text="item.user.name"></strong>
                            <br>
                            <span>{{ item.content }}</span>
                            <br>
                            <small><a>Like</a> · <span v-text="onPosted(item.created_at)"></span></small>
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
    </div>
</template>

<script>
    import Avatar from '@/components/Avatar';
    export default {
        name: "ReplyComment",

        props: ['reply', 'comment_id'],
        components:{
            Avatar
        }
        ,
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
