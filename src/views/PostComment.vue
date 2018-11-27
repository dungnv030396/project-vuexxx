<template>
    <form @submit.prevent="addComment">
        <article class="media">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                </p>
            </figure>
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
    export default {
        name: "PostComment",
        props: ['post_id'],
        data() {
            return {
                content: '',
            }
        },
        methods: {
            addComment() {
                var vm = this;
                axios.post('http://homestead.test/add-comment', {content:this.content,post_id:this.post_id},{
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': "Bearer "+this.$cookies.get("user_session"),
                    }
                }).then(function (response) {
                    console.log(response.data);
                    if (response.status === 200) {
                        location.reload();
                    }
                }).catch(function (error) {
                    if (error.response.status === 401){
                        vm.notificationError();
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
