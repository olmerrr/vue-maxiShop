<template>
    <div class="v-cart">
      <p>Cart:</p>
      <v-cart-item 
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @removeFromCart="removeFromCart(index)"
      />
    </div>
</template>

<script>
import vCartItem from '@/components/v-cart-item.vue'

import { mapActions } from 'vuex'
export default {
  components: { vCartItem },
  name: 'v-cart',
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
     ...mapActions([
      'REMOVE_FROM_CART'
    ]),
    removeFromCart(index) {
      this.REMOVE_FROM_CART(index)
    }
  }
}
</script>

<style lang="scss">
</style>