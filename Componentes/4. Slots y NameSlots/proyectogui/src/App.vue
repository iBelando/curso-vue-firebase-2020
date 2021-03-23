<template>
  <div id="app">
    <ComponenteSlot>
      Hola desde el slot
      
      <!-- Para modificar un slot, es necesario utilizar la etiqueta "template" -->
      <template slot="slot2">
        Hola desde el slot 2
      </template>

      <template slot="slot3">
        Hola desde el slot 3
      </template>
    </ComponenteSlot>
  </div>
</template>

<script>
import ComponenteSlot from './components/ComponenteSlot';

export default {
  name: 'App',
  components: {
    ComponenteSlot
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
