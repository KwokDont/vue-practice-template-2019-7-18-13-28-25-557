<template>
  <div id="app">
    <div><label>sum:</label>{{sum}}</div>
    <input type="text" v-model="counterNum" />
    <counter-group :counterNum="parseInt(counterNum) || 0"></counter-group>
  </div>
</template>

<script>
import CounterGroup from "./components/CountGroup.vue";

export default {
  name: 'app',
  components: {
    CounterGroup,
  },
  data(){
    return {
      counterNum: 0
    }
  },
  computed:{
    sum(){
      return this.$store.state.sum;
    }
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
