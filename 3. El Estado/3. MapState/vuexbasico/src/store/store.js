import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        nombre: 'Manuel',
        edad: 37
    },
    mutations: {
        sumar(state) {
            state.contador++;
        },
        restar(state) {
            state.contador--;
        }
    }
});

store.commit('sumar');
store.commit('restar');