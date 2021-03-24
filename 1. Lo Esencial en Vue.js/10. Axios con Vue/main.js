const app = new Vue({
    el: '#app',
    data() {
        return {
            personas: []
        }
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((respuesta) => {
            this.personas = respuesta.data;
        })
    },
});