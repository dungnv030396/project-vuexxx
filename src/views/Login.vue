<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Login</p>
                <button class="delete" aria-label="close" @click="$emit('close')"></button>
            </header>
            <section class="modal-card-body">
                <input2 label="Email" :v="$v.form.email">
                    <input type="text" class="input" v-model="form.email" @blur="$v.form.email.$touch()">
                </input2>

                <input2 label="Password" :v="$v.form.password">
                    <input type="password" class="input" v-model="form.password" @blur="$v.form.password.$touch()">
                </input2>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" :disabled="$v.form.$invalid">Login</button>
                <button class="button" @click="$emit('close')">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
import {
  maxLength, required, minLength, email,
} from 'vuelidate/lib/validators';
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
    Input2,
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
};
</script>

<style scoped>

</style>
