<template>
  <div id="app">
    <Elemento tipo="h1">Texto de este elemento</Elemento>
    <Elemento tipo="h2">Texto de este elemento</Elemento>
    <Elemento tipo="h3">Texto de este elemento</Elemento>
    <Elemento tipo="aside">Contenido de Aside</Elemento>
    <Elemento tipo="h1">Contenido de Aside</Elemento>
    <Elemento tipo="p">Contenido de Aside</Elemento>
  </div>
</template>

<script>
import Elemento from './components/Elemento';

export default {
  name: 'App',
  components: {
    Elemento
  },
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
