const app = new Vue({
    el: '#main',
    data() {
        return {
            mostrar: false,
            tareas: [
                {
                    titulo: 'Titulo Tarea 1',
                    completado: false
                },
                {
                    titulo: 'Titulo Tarea 2',
                    completado: false
                },
                {
                    titulo: 'Titulo Tarea 3',
                    completado: false
                },
                {
                    titulo: 'Titulo Tarea 4',
                    completado: false
                }
            ]
        }
    },
    methods: {
        completarTarea(tarea) {
            tarea.completado = !tarea.completado;
        },
        btnMostrar() {
            this.mostrar = !this.mostrar;
        }
    },
})