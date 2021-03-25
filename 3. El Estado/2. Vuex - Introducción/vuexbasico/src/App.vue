<template>
  <div id="app">
    <h1>Ejemplo de Vuex Básico</h1>
    <Contador />
    <LeerStore />
  </div>
</template>

<script>
import Contador from './components/Contador';
import LeerStore from './components/LeerStore';

export default {
  name: 'App',
  components: {
    Contador,
    LeerStore
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
