<template>
  <div>
    <button v-on:click="decrease">-</button>
    <span>{{count}}</span>
    <button v-on:click="increase">+</button>
  </div>
</template>

<script>

export default {
  name: 'Counter',
  data(){
    return{
      count:0,
    }
  },
  methods: {
    decrease(){
      this.count--; 
      this.$store.commit('decrease');
    },
    increase(){
      this.count++; 
      this.$store.commit('increment');
    }
  },
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
