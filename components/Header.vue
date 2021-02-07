<template>
  <header class="t-header">
    <a href="/" class="t-logo">
      <img src="/android-chrome-192x192.png" alt="Tidis logo" />
    </a>
  </header>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss">
.t-header {
  width: 100%;
  margin: auto;
  font-size: 15px;

  @apply flex;
  @apply p-2;

  .t-logo {
    width: 80px;
    margin: auto;
  }
}
</style>
