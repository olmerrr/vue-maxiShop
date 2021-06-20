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
  color: #2c3e50;
  font-size: 16px;
}

</style>
