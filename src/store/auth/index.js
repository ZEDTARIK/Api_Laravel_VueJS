import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setUser(state, data) {
            state.user = data
        }
    },
    getters: {
        authentications(state) {
            return state.token && state.user;
        },
        user(state) {
            return state.user;
        }
    },
    actions: {
        async signIn({ dispatch }, user) {
            try {
                const response = await axios.post('auth/login', user);
                return dispatch('attempt', response.data.access_token);
            } catch (error) {
                console.error(error);
            }
        },
        // attempt(token)
        async attempt({ commit, state }, token) {
            try {
                // if exit Token 
                if (token) {
                    commit('setToken', token)
                }

                // if token not existe stop don't execute axios 
                if (!state.token) {
                    return;
                }

                const response = await axios.get('auth/user-profile');

                commit('setUser', response.data)

            } catch (error) {
                commit('setToken', null)
                commit('setUser', null)
            }
        },
        signOut({ commit }) {
            return axios.post('auth/logout').then(() => {
                commit('setToken', null)
                commit('setUser', null)
            })
        }
    }
}
