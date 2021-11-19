<template>
  <div class="payment">
    <div class="payment-wrapper">
      <h1>結帳</h1>
      <div class="content">
        <div class="checkout">
          <Stepper :currentStep="currentStep" /><Form
            :currentStep="currentStep"
            @after-free-button="afterFreeButton"
            @after-dhl-button="afterDhlButton"
          />
        </div>
        <div class="cart">
          <Cart
            :cart="cart"
            @after-minus-button="afterMinusButton"
            @after-plus-button="afterPlusButton"
          />
        </div>
        <ButtonControl
          :currentStep="currentStep"
          @after-next-button="afterNextButton"
          @after-prev-button="afterPrevButton"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Stepper from "./../components/Stepper";
import Form from "./../components/Form";
import Cart from "./../components/Cart";
import ButtonControl from "./../components/ButtonControl";

const dummyData = {
  currentStep: 1,
  cart: {
    products: [
      {
        id: 1,
        name: "破壞補丁修身牛仔褲",
        img: "https://i.imgur.com/Qd4Szoz.png",
        quantity: 1,
        price: 3999,
      },
      {
        id: 2,
        name: "刷色直筒牛仔褲",
        img: "https://i.imgur.com/P5owz6S.png",
        quantity: 1,
        price: 1299,
      },
    ],
    shippingFee: 0,
    freeShipping: "免費",
    dHL: 500,
    total: 5298,
  },
};

export default {
  name: "Checkout",
  components: {
    Stepper,
    Form,
    Cart,
    ButtonControl,
  },
  data() {
    return {
      currentStep: -1,
      cart: {},
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const { currentStep, cart } = dummyData;
      this.currentStep = currentStep;
      this.cart = cart;
    },
    afterNextButton() {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    },
    afterPrevButton() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    afterMinusButton(price, id) {
      if (this.cart.products[id - 1].quantity > 0) {
        this.cart.products[id - 1].quantity--;
        this.cart.total -= price;
      }
    },
    afterPlusButton(price, id) {
      this.cart.products[id - 1].quantity++;
      this.cart.total += price;
      console.log(this.cart.total);
    },
    afterFreeButton() {
      if (this.cart.shippingFee === 500) {
        this.cart.total -= this.cart.shippingFee;
        this.cart.shippingFee = 0;
      }
    },
    afterDhlButton() {
      if (this.cart.shippingFee === 0) {
        this.cart.shippingFee = 500;
        this.cart.total += this.cart.shippingFee;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/abstracts/_reset";
@import "./../assets/scss/components/payment.scss";

</style>
