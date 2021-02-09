<template>
  <header class="t-header">
    <div class="t-header-empty"></div>
    <div class="t-header-logo-container">
      <nuxt-link to="/" class="t-logo" title="Home">
        <img src="/android-chrome-192x192.png" alt="Tidis logo" />
      </nuxt-link>
    </div>
    <div class="t-header-actions">
      <section class="t-menu">
        <button class="t-user-pfp" @focus="handleMenu" @blur="handleMenu">
          <img src="/android-chrome-192x192.png" />
        </button>

        <transition name="slide-fade">
          <ul v-show="isMenuOpen" class="t-user-menu">
            <li>
              <nuxt-link to="/dashboard">Dashboard</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/shortener">Shortener</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
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
    isMenuOpen: true,

    user: {
      email: "",
      name: "",
      photo: "",
    },
  }),
  methods: {
    handleMenu() {
      setTimeout(() => {
        this.isMenuOpen = !this.isMenuOpen;
      }, 50);
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
    @apply justify-end;

    .t-menu {
      float: right;

      .t-user-menu {
        @apply absolute;
        @apply text-gray-700;

        background: whitesmoke;
        right: 0;

        li {
          a {
            @apply rounded-t;
            @apply bg-gray-200;
            @apply py-2;
            @apply px-4;
            @apply block;
            @apply whitespace-no-wrap;
          }

          a:hover {
            @apply bg-gray-400;
          }
        }
      }
    }
  }
}

.t-user-pfp {
  outline: none;
  img {
    @apply rounded-full;

    width: 64px;
    min-width: 64px;
    max-width: 64px;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter {
  transform: translateY(10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
