import Inicio from './components/Inicio.vue';
import Blog from './components/Blog.vue';
import Posts from './components/Posts.vue';

export const routes = [
    { path: '/', component: Inicio },
    { path: '/blog', component: Blog },
    { path: '/posts/:id', component: Posts }
]