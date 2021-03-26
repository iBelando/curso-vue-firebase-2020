<template>
  <div id="app">
    <h1>6 Pasos para Trabajar con Rutas en Vue</h1>
    <router-link active-class="activo" tag="li" exact to="/">
      <a>Inicio</a>
    </router-link>
    <hr>
    <router-link active-class="activo" tag="li" to="/blog">
      <a>Blog</a>
    </router-link>
    <router-link active-class="activo" tag="li" to="/posts/01">
      <a>Posts</a>
    </router-link>
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
.activo a {
  color: orange;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
