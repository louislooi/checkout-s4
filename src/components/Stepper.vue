<template>
  <div class="stepper">
    <div id="step-control" class="stepper-panel">
      <div class="container stepper-container">
        <div class="step active" :class="{ checked: currentStep > 1 }">
          <div class="circle-container"></div>

          <div class="label-container">寄送地址</div>
        </div>
        <div
          class="step"
          :class="[{ active: currentStep > 1 }, { checked: currentStep > 2 }]"
        >
          <div class="circle-container"></div>
          <span class="connect-line"></span>
          <div class="label-container">運送方式</div>
        </div>
        <div class="step" :class="{ active: currentStep === 3 }">
          <div class="circle-container"></div>
          <span class="connect-line"></span>
          <div class="label-container">付款方式</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Stepper",
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/components/stepper.scss";
</style>
