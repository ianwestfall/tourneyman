<template>
  <div>
    <b-row>
      <b-col class="col-12 text-center">
        <h1>Welcome to Tourneyman!</h1>
      </b-col>
      <b-col class="col-12 text-center">
        <p>
          Tourneyman is a martial arts tournament management system. Please fill out the registration
          form to make your account.
        </p>
      </b-col>
      <b-col class="col-12 text-center">
        <p>
          Already have an account? <router-link to="/signIn">Sign in</router-link> instead.
        </p>
      </b-col>
    </b-row>

    <hr />

    <b-row class="registration-form justify-content-center">
      <b-form @submit="onSubmit" class="form">
        <b-form-group label="Email Address:" label-for="email">
          <b-form-input
            id="email"
            v-model="form.email.value"
            type="email"
            required
            placeholder="Enter your email"
          ></b-form-input>
          <div class="validation-error">
            {{ form.email.error }}
          </div>
        </b-form-group>

        <b-form-group label="Password:" label-for="password1">
          <b-form-input
            id="password1"
            v-model="form.password.value"
            type="password"
            required
            placeholder="Choose a password"
          ></b-form-input>
          <div class="validation-error">
            {{ form.password.error }}
          </div>
        </b-form-group>

        <b-form-group label="Confirm Password:" label-for="password2">
          <b-form-input
            id="password2"
            v-model="form.password2.value"
            type="password"
            required
            placeholder="Confirm your password"
          ></b-form-input>
          <div class="validation-error">
            {{ form.password2.error }}
          </div>
        </b-form-group>

        <b-col class="col-12 text-center">
          <b-button type="submit" variant="primary">Register</b-button>
        </b-col>
      </b-form>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: {
          value: null,
          valid: false,
          error: null,
        },
        password: {
          value: null,
          valid: false,
          error: null,
        },
        password2: {
          value: null,
          valid: false,
          error: null,
        },
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // Run some crude validations
      if (!this.form.email.value) {
        this.form.email.valid = false;
        this.form.email.error = 'Email address is required';
      } else {
        this.form.email.valid = true;
        this.form.email.error = null;
      }

      if (this.form.password.value !== this.form.password2.value) {
        console.log('Cannot submit the form, passwords do not match');
        this.form.password.valid = false;
        this.form.password2.valid = false;
        this.form.password.error = 'Passwords must match';
        this.form.password2.error = 'Passwords must match';
      } else {
        this.form.password.valid = true;
        this.form.password.error = null;
        this.form.password2.valid = true;
        this.form.password2.error = null;
      }

      if (this.form.email.valid && this.form.password.valid && this.form.password2.valid) {
        console.log('Submitted the form');
      }
    },
  },
};
</script>

<style lang="scss">
  .registration-form {
    padding: 20px;
  }
  .validation-error {
    color: red;
  }
</style>
