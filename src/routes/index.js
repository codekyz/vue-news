import { createWebHistory, createRouter } from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

const routes = [
    {
        path: '/',
        redirect: '/news',
    },
    {
        path: '/news',
        name: 'news',
        component: NewsView,
    },
    {
        path: '/ask',
        name: 'ask',
        component: AskView,
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView,
    },
    {
        path: '/user/:id',
        component: UserView,
    },
    {
        path: '/item/:itemId',
        component: ItemView,
    },
    
    
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
