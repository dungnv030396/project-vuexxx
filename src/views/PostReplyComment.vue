<template>
    <form @submit.prevent="addReplyComment">
        <article class="media">
            <avatar></avatar>
            <div class="media-content">
                <div class="field">
                    <p class="control">
                        <textarea class="textarea" placeholder="Add a comment..." v-model="content"
                                  name="content" required></textarea>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="btn btn-primary" type="submit">Reply</button>
                    </p>
                </div>
            </div>
        </article>
    </form>
</template>

<script>
    import Avatar from '@/components/Avatar';
    import EventBus from '@/event-bus';

    export default {
        name: "PostReplyComment",
        props: ['comment_id']
        ,
        components: {
            Avatar
        },
        data() {
            return {
                content: '',
            }
        },
        methods: {
            async addReplyComment() {
                EventBus.$emit('posting', 'accepted');
                var vm = this;
                try {
                    const result = await axios.post('http://homestead.test/add-reply-comment',{content: this.content,comment_id:this.comment_id},{
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': "Bearer "+this.$cookies.get("user_session"),
                        }
                    });
                    if (result.status === 200){
                        EventBus.$emit('post', 'accepted');
                        vm.content ='';
                    }
                } catch (e) {
                    if (e.response.status === 401) {
                        vm.notificationError();
                    } else {
                        console.log(e.response);
                    }
                }
            },
            notificationError() {
                this.$message.error('Oops,Please! Login before comment.');
            },
        }
    }
</script>

<style scoped>

</style>
