<template>
  <div class="container">
    <section class="login-screen w-2/4 h-56">
      <div class="login-card">
        <h2 class="login-card-title">Login with your account!</h2>

        <div class="login-form-fields pt-10">
          <form action="" method="post" @submit.prevent>
            <label for="email"> Email </label>
            <input class="input-custom w-full" type="email" name="email" />
          </form>
        </div>
      </div>
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
    @apply p-10;
    @apply mx-auto;
    @apply rounded-md;
    @apply shadow-md;
    @apply border;
    @apply border-gray-100;
    @apply flex;
    @apply flex-col;

    background: whitesmoke;

    .login-card-title {
      @apply text-3xl;
    }
  }
}
</style>
