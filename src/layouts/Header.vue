<template>
    <div id="app">
        <section class="hero is-primary is-medium">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item">
                                <router-link to="/index"><img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"></router-link>
                            </a>
                            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                          <span></span>
                          <span></span>
                          <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroA" class="navbar-menu">
                            <div class="navbar-end">
                                <a class="navbar-item is-active">
                                    <router-link to="/index">Home</router-link>
                                </a>
                                <a class="navbar-item">
                                    <router-link to="/sign-up">Sign Up</router-link>
                                </a>
                                <a class="navbar-item" @click="showModal=true">
                                    Login
                                </a>
                                <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        Laravel - Vuejs
                    </h1>
                    <h2 class="subtitle">
                        Subtitle
                    </h2>
                </div>
            </div>

            <!-- Hero footer: will stick at the bottom -->
            <div class="hero-foot">
                <nav class="tabs">
                    <div class="container">
                        <ul>
                            <li><router-link :to="{ name:'new-post' }">View All Post</router-link></li>
                            <li><router-link :to="{ name:'add-post' }">Add New Post</router-link></li>
                            <li><a>Grid</a></li>
                            <li><a>Elements</a></li>
                            <li><a>Components</a></li>
                            <li><a>Layout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
        <router-view></router-view>
        <login v-if="showModal" @close="showModal=false"></login>
    </div>
</template>

<script>
import Login from '@/views/Login';

export default {
  name: 'Header',
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Login,
  },
};
</script>

<style scoped>

</style>
