<template>
    <div class="v-card">
      <p>{{ title }}</p>
    </div>
</template>

<script>
export default {
  name: 'v-card',
  data() {
    return {
      title: 'this is data for v-card'
    }
  },
  mounted() {
    console.log('hello')
  }
}
</script>

<style lang="scss">
  .v-main-wrapper {
    margin: 0 auto;
    padding: 15px;
  }
</style>