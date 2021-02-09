<template>
  <header class="t-header">
    <div class="t-header-empty"></div>
    <div class="t-header-logo-container">
      <a href="/" class="t-logo" title="Home">
        <img src="/android-chrome-192x192.png" alt="Tidis logo" />
      </a>
    </div>
    <div class="t-header-actions">
      <section class="t-menu">
        <button class="t-user-pfp" @focus="handleMenu" @blur="handleMenu">
          <img src="/android-chrome-192x192.png" />
        </button>

        <transition>
          <ul v-show="isMenuOpen" class="absolute">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </transition>
      </section>
    </div>
  </header>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    isMenuOpen: false,

    user: {
      email: "",
      name: "",
      photo: "",
    },
  }),
  methods: {
    handleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});
</script>
<style lang="scss">
.t-header {
  @apply grid;
  @apply grid-rows-1;
  @apply grid-cols-3;
  @apply grid-flow-row;
  @apply gap-3;

  .t-header-logo-container {
    @apply flex;
    @apply justify-items-center;
    margin: auto;

    .t-logo {
      img {
        width: 75px;
      }
    }
  }

  .t-header-actions {
    @apply flex;
    @apply flex-row;
    @apply justify-evenly;

    margin: auto;
  }
}

.t-user-pfp {
  outline: none;
  img {
    @apply rounded-full;

    width: 64px;
  }
}
</style>
