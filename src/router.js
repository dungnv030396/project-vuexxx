import Vue from 'vue';
import Router from 'vue-router';
import SignUp from './views/SignUp';
import NewPost from './views/NewPost';
import AddPost from './views/AddPost';
import DetailPost from './views/DetailPost';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/index',
            name: 'new-post',
            component: NewPost,
        },
        {
            path: '/post-detail/:id',
            name: 'detail-post',
            component: DetailPost,
        },
        {
            path: '/add-post',
            name: 'add-post',
            component: AddPost,
        },
        {
            path: '/sign-up',
            name: 'home',
            component: SignUp,
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        // },
    ],
});
