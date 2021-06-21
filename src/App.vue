<template>
  <div id="app">
    <!-- <hello-world msg="Hello VUE"/> -->
    <v-main-wrapper />
  </div>
</template>

<script>
import VMainWrapper from '@/components/v-main-wrapper.vue'
export default {
  components: {
    VMainWrapper
  }
}
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: #333;
}
 ul, li {
   list-style: none;
   text-decoration: none;
   padding: 0;
   margin: 0;
 }
 .btn {
    width: 100%;
    font-weight: 700;
    padding: 6px 8px;
    border: none;
    border-radius: 5px;
    background: rgba(6, 245, 165, 0.767);
    cursor: pointer;
 }
</style>
