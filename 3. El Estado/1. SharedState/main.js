const persona = {
    nombre: 'Manuel'
};

new Vue({
    el: '#app1',
    data() {
        return {
            persona: {
                nombre: persona
            }
        }
    },
});

new Vue({
    el: '#app2',
    data() {
        return {
            persona: {
                nombre: persona
            }
        }
    },
});