<template>
    <div class="col-sm-6" style="margin: 20px auto">
    <form action="" class="post-box">
        <h1 style="font-size: 2.5em;text-align: center">Add New Post</h1>

        <input2 label="Title" :v="$v.form.title">
            <input type="text" class="input" v-model="form.title" @blur="$v.form.title.$touch()">
            <i slot="icon" class="fas fa-unlock-alt"></i>
        </input2>

        <input2 label="Content" :v="$v.form.content">
            <div class="control">
                <textarea class="textarea" placeholder="Textarea" v-model="form.content" @blur="$v.form.content.$touch()"></textarea>
            </div>
        </input2>

        <div class="field">
            <p class="control">
                <button class="btn btn-primary" type="submit">Submit</button>
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
                title: { required,maxLength:maxLength(10) },
                content: { required,maxLength:maxLength(20)},
            }
        }
    }
</script>

<style scoped>

</style>
