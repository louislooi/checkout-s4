<template>
  <div id="app">
    <Navbar />
    <main role="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "margin: 0px;");
  },
  beforeDestry() {
    document.body.removeAttribute("style");
  },
};
</script>
<style scoped></style>
