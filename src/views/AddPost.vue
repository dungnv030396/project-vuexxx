<template>
    <div class="col-sm-6" style="margin: 20px auto">
        <h1 style="font-size: 2.5em;text-align: center">Add New Post</h1>
        <form class="post-box" @submit.prevent="onSubmitAddPost">
            <input2 label="Title" :v="$v.form.title">
                <input type="text" class="input" v-model="form.title" @blur="$v.form.title.$touch()" name="title">
                <i slot="icon" class="fas fa-unlock-alt"></i>
            </input2>

            <input2 label="Content" :v="$v.form.content">
                <div class="control">
                    <textarea class="textarea" placeholder="Textarea" v-model="form.content"
                              @blur="$v.form.content.$touch()" name="content"></textarea>
                </div>
            </input2>

            <div class="field">
                <p class="control">
                    <button class="btn btn-primary" disabled :disabled="$v.form.$invalid" type="submit">Submit</button>
                </p>
            </div>
        </form>
    </div>
</template>

<script>
    import {
        maxLength, required
    } from 'vuelidate/lib/validators';
    import Input2 from '@/components/Input';

    export default {
        name: "AddPost",
        components: {
            Input2
        },
        data() {
            return {
                form: {
                    title: '',
                    content: '',
                }
            }
        },
        validations: {
            form: {
                title: {required, maxLength: maxLength(50)},
                content: {required, maxLength: maxLength(2000)},
            }
        },
        methods: {
            onSubmitAddPost() {
                var vm = this;
                axios.post('http://homestead.test/create-new-post', vm.form,{
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': "Bearer " +this.$cookies.get("user_session"),
                    }
                })
                    .then(function (response) {
                        if (response.status === 200) {
                            vm.notificationSuccess();
                            vm.$v.form.$reset();
                            vm.form = {};
                        }
                    }).catch(error => console.log(error));
            },
            notificationSuccess() {
                this.$message({
                    message: 'Congrats, Create a new post successful.',
                    type: 'success'
                });
            },
        }
    }
</script>

<style scoped>

</style>
