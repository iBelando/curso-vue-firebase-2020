<template>
  <div id="app">
    <Persona nombre="Manuel" edad="37" />
    <hr>
    <Persona nombre="Victoria" edad="20" />
    <hr>
    <Persona nombre="José" edad="50" />
  </div>
</template>

<script>
import Persona from './components/Persona';

export default {
  name: 'App',
  components: {
    Persona
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
