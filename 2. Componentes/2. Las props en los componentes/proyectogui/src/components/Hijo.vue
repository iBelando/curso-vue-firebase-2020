<template>
    <div>
        <p>Nombre: {{ nombre }}</p>
        <p>Edad: {{ edad }}</p>
    </div>
</template>

<script>
export default {
    name: 'Hijo',
    props: {
        nombre: String,
        edad: String
    }
}
</script>

<style>

</style>