<template>
    <div class="v-main-wrapper">
      <v-catalog />
      <v-card />
    </div>
</template>

<script>
import vCatalog from '@/components/v-catalog';
import vCard from '@/components/v-card';

export default {
  name: 'v-main-wrapper',
  data() {
    return {
      title: 'this is data for v-main-wrapper'
    }
  },
  components: {
      vCatalog,
      vCard
    }
}
</script>

<style lang="scss">
  .v-main-wrapper {
    margin: 0 auto;
    padding: 15px;
  }
</style>