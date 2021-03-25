<template>
    <div>
        <p>El valor del contador es: {{ this.$store.state.contador }}</p>
        <button @click="sumar">Sumar</button>
        <button @click="restar">Restar</button>
    </div>
</template>

<script>
import { store } from '../store/store';

export default {
    name: 'Contador',
    store: store,
    methods: {
        sumar() {
            this.$store.commit('sumar');
        },
        restar() {
            this.$store.commit('restar');
        }
    }
}
</script>

<style>

</style>