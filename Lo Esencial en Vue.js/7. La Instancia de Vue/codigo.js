const puente = new Vue({
    data() {
        return {
            datoGenerico: 'Este string es compartido'
        }
    },
});

const app = new Vue({
    el: '#main',
    data() {
        return {
            titulo: 'Instancia Numero Uno',
            dato: 35,
            datoGenerico: puente.datoGenerico
        }
    },
});

const app2 = new Vue({
    el: '#app2',
    data() {
        return {
            titulo: 'Instancia Numero Dos',
            dato: 12,
            datoGenerico: puente.datoGenerico
        }
    },
});