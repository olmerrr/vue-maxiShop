<template>
    <div class="v-catalog">
      <p>{{ title }}</p>
      <v-catalog-item />
    </div>
</template>

<script>
import vCatalogItem from '@/components/v-catalog-item'
export default {
  name: 'v-catalog',
  data() {
    return {
      title: 'this is data for v-catalog'
    }
  },
  components: { vCatalogItem },
}
</script>

<style lang="scss">
  .v-main-wrapper {
    margin: 0 auto;
    padding: 15px;
  }
</style>