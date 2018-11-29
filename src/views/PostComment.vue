<template>
    <form @submit.prevent="addComment">
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
                        <button class="btn btn-primary" type="submit">Post comment</button>
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
        name: "PostComment",
        props: ['post_id'],
        data() {
            return {
                content: '',
            }
        },
        components: {
            Avatar
        },
        methods: {
            addComment() {
                // EventBus.$emit('loading', 'accepted');
                var vm = this;
                axios.post('http://homestead.test/add-comment', {content: this.content, post_id: this.post_id}, {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': "Bearer " + this.$cookies.get("user_session"),
                    }
                }).then(function (response) {
                    EventBus.$emit('post', 'accepted');
                    vm.content ='';
                }).catch(function (error) {
                    if (error.response.status === 401){
                        vm.notificationError();
                    }else{
                        console.log(error.response);
                    }
                });
            },
            notificationError() {
                this.$message.error('Oops,Please! Login before comment.');
            },
        }
    }
</script>

<style scoped>

</style>
