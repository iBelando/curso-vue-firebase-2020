<template>
    <div>
        <h1 style="color: red;">
            <!-- Entre las etiquetas "slot", va todo lo que es editable en el componente desde afuera -->
            <slot>
                Hola desde el componente
            </slot>
        </h1>
        <hr>
        <h2>
            <!-- Para multiples slots, es necesario definirlo un nombre a cada slot -->
            <slot name="slot2">
                Hola desde el componente 2
            </slot>
        </h2>
        <hr>
        <h2>
            <slot name="slot3">
                Hola desde el componente 3
            </slot>
        </h2>
    </div>
</template>

<script>
export default {
    name: 'ComponenteSlot'
}
</script>

<style>

</style>