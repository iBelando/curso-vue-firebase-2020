<template>
    <div>
        <h1>Blog</h1>
        <button @click="volverAInicio">Volver a Inicio</button>
    </div>
</template>

<script>
export default {
    name: 'Blog',
    methods: {
        volverAInicio() {
            thi.$router.push('/', () => console.log('Volviste'));
        }
    }
}
</script>

<style>

</style>