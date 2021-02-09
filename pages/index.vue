<template>
  <div class="t-site-content">
    <Header />
    <section class="container">
      <h1 class="m-32">Hello World</h1>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => {
    return {};
  },
});
</script>

<style lang="scss">
.container {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
