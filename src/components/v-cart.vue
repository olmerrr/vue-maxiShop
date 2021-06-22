<template>
    <div class="v-cart">
      <p>{{ title }}</p>
      <v-cart-item 
        v-for="item in cart_data"
        :key="item.article"
        :cart_item_data="item"
      />
    </div>
</template>

<script>
import vCartItem from '@/components/v-cart-item.vue'

export default {
  components: { vCartItem },
  name: 'v-cart',
  data() {
    return {
      title: 'this is data for v-cart'
    }
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style lang="scss">
</style>