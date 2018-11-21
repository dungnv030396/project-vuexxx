<template>
    <div class="col-sm-6" style="margin: 20px auto">
        <form action="" class="post-box">
        <h1 style="font-size: 2.5em;text-align: center">Register</h1>

        <input2 label="Name" :v="$v.form.name">
            <input type="text" class="input" v-model="form.name" @blur="$v.form.name.$touch()">
            <i slot="icon" class="fas fa-user"></i>
        </input2>

        <input2 label="User Name" :v="$v.form.username">
            <input type="text" class="input" v-model="form.username" @blur="$v.form.username.$touch()">
            <i slot="icon" class="fas fa-user"></i>
        </input2>

        <input2 label="Email" :v="$v.form.email">
            <input type="text" class="input" v-model="form.email" @blur="$v.form.email.$touch()">
            <i slot="icon" class="fas fa-envelope"></i>
        </input2>

        <input2 label="Password" :v="$v.form.password">
            <input type="password" class="input" v-model="form.password" @blur="$v.form.password.$touch()">
            <i slot="icon" class="fas fa-unlock-alt"></i>
        </input2>

        <input2 label="Confirm Password" :v="$v.form.confirm_password">
            <input type="password" class="input" v-model="form.confirm_password" @blur="$v.form.confirm_password.$touch()">
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
                <button class="button is-link" disabled :disabled="checked || $v.form.$invalid">Submit</button>
            </div>
        </div>
        </form>
    </div>
</template>


<script>
import {
  maxLength, required, minLength, email, sameAs,
} from 'vuelidate/lib/validators';

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
        confirm_password: '',
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
      confirm_password: {
        required,
        sameAs: sameAs('password'),
      },
    },
  },
  components: {
    Input2,
  },
};
</script>

<style scoped>

</style>
