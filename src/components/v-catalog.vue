<template>
  <div>
    <section 
      v-if="isLoading"
      >
      <v-loader />        
    </section>
    <section 
      class="v-catalog"
      v-else
    >
      <v-catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
        />
    </section>
  </div>
</template>

<script>
import vCatalogItem from "@/components/v-catalog-item";
import vLoader from "@/components/v-loader";

import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    vLoader
  },
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API",
      "ADD_TO_CART"
      ]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((responce) => {
      if (responce.data) {
        this.isLoading = false;
      } return []
    });
  },
};
</script>

<style lang="scss">
.v-catalog {
  gap: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>