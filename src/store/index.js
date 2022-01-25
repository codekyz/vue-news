import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';

const store = createStore({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: {},
    },
    getters: {
        fetchedNews(state) {
            return state.news;
        },
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedUser(state) {
            return state.user;
        },
        fetchedItem(state) {
            return state.item;
        },

    },
    mutations,
    actions,
});

export default store;