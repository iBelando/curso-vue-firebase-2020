const app = new Vue({
    el: '#main',
    data: {
        conectado: true,
        edad: 18,
        lista: ['Manuel','Jose','Victoria'],
        listaPersonas: [
            { 
                nombre: 'Manuel', 
                edad: 37 
            },
            {
                nombre: 'Jose',
                edad: 34
            },
            {
                nombre: 'Victoria',
                edad: 20
            }
        ]
    }
});