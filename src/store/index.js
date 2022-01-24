import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';

const store = createStore({
    state: {
        news: [],
        ask: [],
        jobs: [],
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
        }
    },
    mutations,
    actions,
});

export default store;