<template>
    <div>
        <h2>Soy el componente Hijo</h2>
        <button @click="emitirEvento()">Cerrar Componente Hijo</button>
    </div>
</template>

<script>
export default {
    name: 'Hijo',
    methods: {
        emitirEvento () {
            //  Emitimos un evento al componente padre
            this.$emit('cerrar');
        }
    }
}
</script>

<style>

</style>