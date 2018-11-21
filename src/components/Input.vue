<template>
    <div class="field">
        <label class="label">{{ label }}</label>
        <div class="control has-icons-left has-icons-right">
            <slot></slot>
            <span class="icon is-small is-left">
      <slot name="icon"></slot>
    </span>
            <span class="icon is-small is-right">
      <i class="fas" :class="{ 'fa-check': !v.$error, 'fa-exclamation-triangle': v.$error}"></i>
    </span>
        </div>
        <p class="help is-danger">{{ message }}</p>
        <!--<p class="help is-danger" v-if="!$v.form.name.maxLength">Field name is too long</p>-->
    </div>
</template>

<script>
export default {
  props: ['label', 'v'],
  computed: {
    message() {
      if (this.v.$error) {
        for (const key in this.$options.messages) {
          if (this.v[key] === false) {
            return this.$options.messages[key](this.v);
          }
        }
      } else {
        return null;
      }
    },
  },
  messages: { // Add more messages here when you need, the key should be the same as the name of the validator
    required: v => 'This field is required',
    email: v => 'Must be a valid e-mail',
    alphaNum: v => 'May only contain letters and numbers',
    minLength: v => `Must be at least ${v.$params.minLength.min} characters`,
    maxLength: v => `Must be at least ${v.$params.maxLength.max} characters`,
    goodPassword: v => '', // The password rules are always displayed, so no need to show a message
    sameAs: v => `Must be same as ${v.$params.sameAs.eq}`,
  },

  name: 'Input',
};
</script>

<style scoped>

</style>
