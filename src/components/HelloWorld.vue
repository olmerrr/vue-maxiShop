<template>
  <div class="wrapp">
    <h1>{{ msg }}</h1>
    <p>{{info}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      info: null
    }
  },
   mounted() {
    axios
      .get('http://localhost:3000/posts')
      .then(response => (this.info = response));
  }
}
</script>

<style scoped lang="scss">
.wrapp {
  h2 .title{
    color: #333;
  }
}
</style>
