<template>
  <div >
    <counter v-for="count in counterNum" v-bind:key="count"></counter>
  </div>
</template>

<script>
import Counter from "./Counter.vue";

export default {
  name: 'CountGroup',
  props: {
      counterNum: Number,
  },
  components: {
    Counter,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
