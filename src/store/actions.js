import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo } from '../api/index';

export default {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then(({ data }) => {
                commit('SET_NEWS', data);
            })
            .catch(error => {
                console.log(error)
            });
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK', data);
            })
            .catch(error => {
                console.log(error)
            });
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error)
            });
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error)
            });
    },
    FETCH_ITEM({ commit }, itemId) {
        fetchItemInfo(itemId)
            .then(({ data }) => {
                commit('SET_ITEM', data);
                console.log(data);
            })
            .catch(error => {
                console.log(error)
            });
    },
}