<template>
    <div class="v-catalog-item">
      <p>{{ title }}</p>
    </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  data() {
    return {
      title: 'this is data for v-catalog-item'
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