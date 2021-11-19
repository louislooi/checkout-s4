<template>
  <div class="cart-container">
    <h2 class="main-title">購物籃</h2>
    <div class="shopping-cart_items-list">
      <div
        class="shopping-cart_item"
        v-for="product in cart.products"
        :key="product.id"
      >
        <img :src="product.img" alt="" />
        <div class="shopping-cart_item-info">
          <div class="title-counter">
            <p>{{ product.name }}</p>
            <div class="counter">
              <i
                class="fas fa-minus"
                @click="handleMinusButtonClick(product.price, product.id)"
                >-</i
              >

              <p>{{ product.quantity }}</p>
              <i
                class="fas fa-plus"
                @click="handlePlusButtonClick(product.price, product.id)"
                >+</i
              >
            </div>
          </div>

          <p class="price-tag">${{ product.price }}</p>
        </div>
      </div>
    </div>
    <div class="shipping-rate">
      <p>運費</p>
      <p class="shipping-sub-title shipping-sub-rate">
        {{ cart.shippingFee ? "$500" : "免費" }}
      </p>
    </div>

    <div class="shipping-rate">
      <p>小計</p>
      <p class="shipping-sub-title shipping-total-title">${{ cart.total }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleMinusButtonClick(price, id) {
      this.$emit("after-minus-button", price, id);
    },
    handlePlusButtonClick(price, id) {
      this.$emit("after-plus-button", price, id);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/components/cart.scss";
</style>
