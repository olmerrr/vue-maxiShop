<template>
    <div class="v-main-wrapper">
      <v-card />
      <v-catalog />
    </div>
</template>

<script>
import vCatalog from '@/components/v-catalog';
import vCard from '@/components/v-card';

export default {
  name: 'v-main-wrapper',
  components: {
      vCatalog,
      vCard
    }
}
</script>

<style lang="scss">
  .v-main-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
  }
</style>