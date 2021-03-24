<template>
    <div>
        <Hijo :nombre="nombre" :edad="edad" />
    </div>
</template>

<script>
import Hijo from './Hijo';

export default {
    name: 'Persona',
    props: {
        nombre: String,
        edad: Number
    },
    components: {
        Hijo
    }
}
</script>

<style>

</style>