<template>
    <div class="col-sm-6" style="margin: 20px auto">
        <form class="post-box" method="post" @submit.prevent="onSubmitSignUp">
            <h1 style="font-size: 2.5em;text-align: center">Register</h1>

            <input2 label="Name" :v="$v.form.name">
                <input type="text" class="input" v-model="form.name" @blur="$v.form.name.$touch()" name="name">
                <i slot="icon" class="fas fa-user"></i>
            </input2>

            <input2 label="User Name" :v="$v.form.username">
                <input type="text" class="input" v-model="form.username" @blur="$v.form.username.$touch()"
                       name="username">
                <i slot="icon" class="fas fa-user"></i>
            </input2>

            <input2 label="Email" :v="$v.form.email">
                <input type="text" class="input" v-model="form.email" @blur="$v.form.email.$touch()" name="email">
                <i slot="icon" class="fas fa-envelope"></i>
            </input2>

            <input2 label="Password" :v="$v.form.password">
                <input type="password" class="input" v-model="form.password" @blur="$v.form.password.$touch()"
                       name="password">
                <i slot="icon" class="fas fa-unlock-alt"></i>
            </input2>

            <input2 label="Confirm Password" :v="$v.form.password_confirmation">
                <input type="password" class="input" v-model="form.password_confirmation"
                       @blur="$v.form.password_confirmation.$touch()" name="password_confirmation">
                <i slot="icon" class="fas fa-unlock-alt"></i>
            </input2>

            <div class="field">
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="question" checked>
                        Male
                    </label>
                    <label class="radio">
                        <input type="radio" name="question">
                        Female
                    </label>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" @click="checked?checked=false:checked=true">
                        I agree to the <a href="#">terms and conditions</a>
                    </label>
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link" type="submit" disabled :disabled="checked || $v.form.$invalid">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>


<script>
    import {
        maxLength, required, minLength, email, sameAs,
    } from 'vuelidate/lib/validators';

    import axios from 'axios';
    window.axios = axios;
    import Input2 from '@/components/Input';

    export default {
        name: 'SignUp',
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    username: '',
                    password: '',
                    password_confirmation: '',
                },
                checked: true,
            };
        },
        validations: {
            form: {
                name: {
                    required,
                    maxLength: maxLength(10),
                },
                email: {
                    required,
                    email,
                },
                username: {
                    required,
                    maxLength: maxLength(10),
                },
                password: {
                    required,
                    maxLength: maxLength(10),
                    minLength: minLength(6),
                },
                password_confirmation: {
                    required,
                    sameAs: sameAs('password'),
                },
            },
            errors:{},
        },
        components: {
            Input2,
        },
        methods: {
            onSubmitSignUp() {
                var vm = this;
                axios.post('http://homestead.test/sign-up',
                    this.form, // the data to post
                ).then(function (response) {
                    if (response.status === 200){
                        vm.notificationSuccess();
                        vm.form ={};
                        vm.$v.form.$reset();
                    }else{
                        vm.notificationError();
                    }
                })
                    .catch(errors => console.log(errors));
            },
            notificationSuccess() {
                this.$message({
                    message: 'Congrats, Create a new account successful.',
                    type: 'success'
                });
            },
            notificationError() {
                this.$message.error('Oops, Invalid account,please try again.');
            },

        }
    };
</script>

<style scoped>

</style>
