<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Login</p>
                <a class="delete" aria-label="close" @click="$emit('close')"></a>
            </header>
            <form @submit.prevent="onSubmitLogin" method="post">
                <section class="modal-card-body">
                    <input2 label="Email" :v="$v.form.email">
                        <input type="text" class="input" v-model="form.email" @blur="$v.form.email.$touch()"
                               name="email">
                        <i slot="icon" class="fas fa-envelope"></i>
                    </input2>

                    <input2 label="Password" :v="$v.form.password">
                        <input type="password" class="input" v-model="form.password" @blur="$v.form.password.$touch()"
                               name="password">
                        <i slot="icon" class="fas fa-unlock-alt"></i>
                    </input2>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success" :disabled="$v.form.$invalid">Login</button>
                </footer>
            </form>
        </div>
    </div>
</template>

<script>
    import {
        maxLength, required, minLength, email,
    } from 'vuelidate/lib/validators';
    import EventBus from '@/event-bus';

    import Input2 from '@/components/Input';
    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
            };
        },
        components: {
            Input2
        },
        validations: {
            form: {
                email: {
                    required, email,
                },
                password: {
                    required, minLength: minLength(6), maxLength: maxLength(30),
                },
            },
        },
        methods: {
            onSubmitLogin() {
                var vm = this;
                axios.post('http://homestead.test/login',
                    this.form,
                ).then(function (response) {
                    if (response.status === 200) {
                        vm.$cookies.set('user_session', response.data.success['token'], "1d");
                        EventBus.$emit('auth','login')
                    }
                }).catch(function (error) {
                    if(error.response.status===401){
                        vm.notification();
                    }
                });
            },
            notification() {
                    this.$message.error('Oops, Invalid account,please try again.');
            },
        }
    };
</script>

<style scoped>

</style>
