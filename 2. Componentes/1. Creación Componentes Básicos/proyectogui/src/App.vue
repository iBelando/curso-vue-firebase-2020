<template>
  <div id="app">
    <Saludo />
    <ComponenteDos />
  </div>
</template>

<script>
import Saludo from './components/Saludo';
import ComponenteDos from './components/ComponenteDos';

export default {
  name: 'App',
  components: {
    Saludo,
    ComponenteDos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
