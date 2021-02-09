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

        <transition name="slide-fade">
          <ul v-show="isMenuOpen" class="absolute t-user-menu">
            <li v-for="(i, o) in 10" :key="o">
              <nuxt-link to="/dashboard/dashboard">Dashboard {{ i }}</nuxt-link>
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
        background: whitesmoke;
        right: 0;

        li {
          color: #151515;
          border: 1px solid #f00;
          margin: 5px 25px;
          transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
          cursor: pointer;

          a {
            padding: 20px;
          }
        }

        li:hover {
          background: #e2e2e2;
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
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
