<template>
  <div
    id="btn-control"
    class="form_btn-control control-panel d-flex"
    :class="{ single_btn: currentStep === 1 }"
  >
    <button
      class="btn-prev"
      @click.stop.prevent="handlePrevButtonClick"
      v-if="currentStep !== 1"
    >
      ← 上一步
    </button>
    <button class="btn-next" @click.stop.prevent="handleNextButtonClick">
      {{ currentStep === 3 ? "確認下單" : "下一步 →" }}
    </button>
  </div>
</template>

<script>
// const buttonText="下一步 →"
export default {
  name: "ButtonControl",
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleNextButtonClick() {
      this.$emit("after-next-button");
    },
    handlePrevButtonClick() {
      this.$emit("after-prev-button");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/components/buttons.scss";
</style>
