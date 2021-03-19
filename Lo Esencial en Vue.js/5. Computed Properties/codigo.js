const app = new Vue({
    el: '#main',
    data() {
        return {
            tarea: null,
            tareas: [
                {
                    titulo: 'Aprender ES6',
                    completado: false
                },
                {
                    titulo: 'Aprender Vue',
                    completado: true
                },
                {
                    titulo: 'Desarrollar toda la tarde',
                    completado: false
                },
                {
                    titulo: 'Levantate',
                    completado: true
                }
            ]
        }
    },
    methods: {
        agregarTarea() {
            this.tareas.unshift({ titulo: this.tarea, completado: false });
        }
    },
    computed: {
        mostrarCompletadas() {
            return this.tareas.filter(item => item.completado);
        },
        mostrarNombre() {
            return "Manuel";
        }
    },
})