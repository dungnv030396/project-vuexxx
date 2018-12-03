<template>
    <div id="app" v-loading="loading" element-loading-text="Loading..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)">
        <section class="hero is-primary is-medium">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item">
                                <router-link to="/index"><img src="https://bulma.io/images/bulma-type-white.png"
                                                              alt="Logo"></router-link>
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
                                <a class="navbar-item" v-if="Object.keys(user).length === 0">
                                    <router-link to="/sign-up">Sign Up</router-link>
                                </a>
                                <a class="navbar-item" @click="showModal=true" v-if="Object.keys(user).length === 0">
                                    Login
                                </a>
                                <a class="navbar-item" v-if="Object.keys(user).length !== 0" v-text="user.name"></a>
                                <span class="navbar-item">
              <a class="button is-primary is-inverted" v-if="Object.keys(user).length !== 0" @click="logout">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Logout</span>
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
                            <li>
                                <router-link :to="{ name:'new-post' }">View All Post</router-link>
                            </li>
                            <li v-if="Object.keys(user).length !== 0">
                                <router-link :to="{ name:'add-post' }">Add New Post</router-link>
                            </li>
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
    import EventBus from '@/event-bus';

    export default {
        name: 'Header',
        data() {
            return {
                showModal: false,
                user: {},
                loading: false,
            };
        },
        components: {
            Login,
        },
        mounted() {
            this.getUser();
            EventBus.$on('auth',this.getUser);
            EventBus.$on('posting', showLoading => {
                this.loading = true;
            });
            EventBus.$on('posted', hiddenLoading => {
                this.loading = false;
            });
        }
        , methods: {
            getUser() {
                var vm = this;
                if (this.$cookies.get("user_session") !== null) {
                    axios.get('http://homestead.test/get-user-profile', {
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': "Bearer " + this.$cookies.get("user_session"),
                        }
                    })
                        .then(function (response) {
                            vm.user = response.data;
                            vm.showModal = false;
                        });
                } else {
                    vm.user = {};
                }
            },
            logout() {
                var vm = this;
                axios.get('http://homestead.test/logout', {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': "Bearer " + this.$cookies.get("user_session"),
                    }
                })
                    .then(function (response) {
                        if (response.status === 200) {
                            vm.$cookies.remove("user_session");
                            EventBus.$emit('auth','logout');
                        }
                    });
            },
        },

    };
</script>

<style scoped>

</style>
