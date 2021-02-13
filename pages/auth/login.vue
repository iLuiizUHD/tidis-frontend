<template>
  <div class="container">
    <section class="login-screen w-3/4 h-56">
      <div class="login-card">teste</div>
    </section>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss">
* {
  color: #383838;
}

.login-screen {
  @apply m-auto;
  @apply pt-20;

  .login-card {
    @apply p-20;
    @apply mx-auto;
    @apply rounded-md;
    @apply shadow-md;
    @apply border;
    @apply border-gray-100;
    @apply flex;
    @apply flex-col;
    background: whitesmoke;
  }
}
</style>
