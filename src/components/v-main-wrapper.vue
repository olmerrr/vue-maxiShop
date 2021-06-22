<template>
    <div class="v-main-wrapper">
      <v-cart 
      v-if="CART.length"
      :cart_data="CART"
      />
      <v-catalog />
    </div>
</template>

<script>
import vCatalog from '@/components/v-catalog';
import vCart from '@/components/v-cart';

import { mapGetters } from 'vuex';
export default {
  name: 'v-main-wrapper',
  components: {
      vCatalog,
      vCart
    },
  computed: {
    ...mapGetters([
      'CART'
    ])
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