
<script>
export default {
    name: 'Elemento',
    props: {
        tipo: String
    },
    render(h) {
        return h(
            this.tipo, // Que tipo de elemento va a renderizar
            this.$slots.default //  Contenido del elemeneto a renderizar   
            )
    },
}
</script>

<style>

</style>