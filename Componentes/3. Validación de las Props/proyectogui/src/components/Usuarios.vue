<template>
    <div>
        <p>Nombre: {{ nombre }}</p>
        <p>Email: {{ email }}</p>
        <p>Teléfono: {{ telefono }}</p>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'Usuarios',
    props: {
        nombre: {
            type: String,
            required: true,
            default: 'John'
        },
        email: String,
        telefono: Number
    }
}
</script>

<style>

</style>