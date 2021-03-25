<template>
  <div id="app">
    <h1>6 Pasos para Trabajar con Rutas en Vue</h1>
    <router-link to="/">Inicio</router-link>
    <hr>
    <router-link to="/blog">Blog</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
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
