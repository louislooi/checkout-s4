<template>
  <form id="a-form">
    <div class="form-content">
      <!-- Form part-1 -->
      <div class="part" v-if="currentStep === 1">
        <h2 class="part-title">寄送地址</h2>
        <div class="address-field">
          <div class="form-row form-row_title">
            <label class="form-label">稱謂</label>
            <div class="select-wrapper">
              <select
                class="form-row_address-field"
                name="customer-title"
                id="customer-title"
                required
              >
                <option value="ms">小姐</option>
                <option value="mr">先生</option>
                <option value="customer">顧客</option>
              </select>
            </div>
          </div>
          <div class="form-row form-row_name">
            <label class="form-label">姓名</label>
            <input
              class="form-row_address-field"
              type="text"
              id="fullname"
              name="fullname"
              placeholder="請輸入姓名"
            />
          </div>
          <div class="form-row form-row_tel">
            <label class="form-label">電話</label>
            <input
              class="form-row_address-field"
              type="tel"
              id="phone"
              name="phone"
              placeholder="請輸入行動電話"
            />
          </div>
          <div class="form-row form-row_email">
            <label class="form-label">Email</label>
            <input
              class="form-row_address-field"
              type="email"
              id="email"
              name="email"
              placeholder="請輸入電子郵件"
            />
          </div>

          <div class="form-row form-row_city-county">
            <label class="form-label">縣市</label>
            <div class="select-wrapper">
              <select
                class="form-row_address-field"
                name="city-county"
                id="city-county"
                required
              >
                <option value="" disabled selected>請選擇縣市</option>
                <option value="keelung-city">基隆市</option>
                <option value="taipei-city">台北市</option>
                <option value="new-taipei-city">新北市</option>

                <option value="taoyuan-county">桃園縣</option>
                <option value="hsinchu-city">新竹市</option>
                <option value="hsinchu-county">新竹縣</option>

                <option value="miaoli-county">苗栗縣</option>
                <option value="taichung-city">台中市</option>
                <option value="changhua-county">彰化縣</option>

                <option value="nantou-county">南投縣</option>
                <option value="yunlin-county">雲林縣</option>
                <option value="jiayi-city">嘉義市</option>

                <option value="jiayi-county">嘉義縣</option>
                <option value="tainan-city">台南市</option>
                <option value="kaohsiung-city">高雄市</option>

                <option value="pingtung-county">屏東縣</option>
                <option value="taitung-county">台東縣</option>
                <option value="hualien-county">花蓮縣</option>

                <option value="yilan-county">宜蘭縣</option>
                <option value="penghu-county">澎湖縣</option>
                <option value="kinmen-county">金門縣</option>
                <option value="lienchiang-county">連江縣</option>
              </select>
            </div>
          </div>
          <div class="form-row form-row_address">
            <label class="form-label">地址</label>
            <input
              class="form-row_address-field"
              type="text"
              id="address"
              name="address"
              placeholder="請輸入地址"
            />
          </div>
        </div>
      </div>
      <!--  Form part-2 -->
      <div class="part" v-if="currentStep === 2">
        <h2 class="part-title">運送方式</h2>
        <div class="shipping-method_list">
          <label for="standard" @click="handleFreeButtonClick">
            <div class="shipping-method">
              <input
                class="free"
                type="radio"
                id="standard"
                name="shipping-method"
                value="standard"
                checked
              />
              <div class="shipping-info">
                標準運送
                <p>約 3~7 個工作天</p>
              </div>
              <div class="price">免費</div>
            </div>
          </label>

          <label for="dhl" @click="handleDhlButtonClick">
            <div class="shipping-method">
              <input
                class="dhl"
                type="radio"
                id="dhl"
                name="shipping-method"
                value="dhl"
              />
              <div class="shipping-info">
                DHL 貨運
                <p>48 小時內送達</p>
              </div>
              <div class="price">$ 500</div>
            </div>
          </label>
        </div>
      </div>
      <!-- Form part-3 -->
      <div class="part" v-if="currentStep === 3">
        <h2 class="part-title">付款資訊</h2>
        <div class="cardholder-field">
          <div class="form-row form-row_cname">
            <label class="form-label">持卡人姓名</label>
            <input
              class="form-row_cardholder-field"
              type="text"
              id="cardholder-name"
              name="cardholder-name"
              placeholder="John Doe"
            />
          </div>

          <div class="form-row form-row_cnum">
            <label class="form-label">卡號</label>
            <input
              class="form-row_cardholder-field"
              type="text"
              id="card-number"
              name="card-number"
              placeholder="1111 2222 3333 4444"
            />
          </div>
          <div class="form-row form-row_exp">
            <label class="form-label">有效期限</label>
            <input
              class="form-row_cardholder-field"
              type="text"
              id="exp-date"
              name="exp-date"
              placeholder="MM/YY"
            />
          </div>
          <div class="form-row form-row_cvc">
            <label class="form-label">CVC / CCV</label>
            <input
              class="form-row_cardholder-field"
              type="text"
              id="CVC/CCV"
              name="CVC/CCV"
              placeholder="123"
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleFreeButtonClick() {
      this.$emit("after-free-button");
    },
    handleDhlButtonClick() {
      this.$emit("after-dhl-button");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/components/form.scss";
</style>
