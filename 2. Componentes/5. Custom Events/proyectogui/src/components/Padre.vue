<template>
    <div>
        <button @click="mostrar = true">Mostrar Componente Hijo</button>
        <Hijo @cerrar="mostrar = false" v-show="mostrar" />
    </div>
</template>

<script>
import Hijo from './components/Hijo';

export default {
    name: 'Padre',
    components: {
        Hijo
    },
    data() {
        return {
            mostrar: false
        }
    },
}
</script>

<style>

</style>