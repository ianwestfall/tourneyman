<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand to="/">Tourneyman</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item-dropdown right v-if="authenticatedUser">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item to="/profile">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/register" v-if="!authenticatedUser">Register</b-nav-item>
            <b-nav-item to="/signIn" v-if="!authenticatedUser">Sign In</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view/>
  </div>
</template>

<script>
import { getAuthenticatedUser } from './utils/auth';

export default {
  name: 'App',
  data() {
    return {
      authenticatedUser: null,
    };
  },
  methods: {
    refreshUsername() {
      const user = getAuthenticatedUser();
      this.authenticatedUser = user ? user.identities[0].userId : null;
    },
  },
  mounted() {
    this.refreshUsername();
    this.$eventHub.$on('authResume', () => {
      this.refreshUsername();
    });
  },
};
</script>

<style lang="scss">
  #nav {
    padding-bottom: 20px;
  }
</style>
