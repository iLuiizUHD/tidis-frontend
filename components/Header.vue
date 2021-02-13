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
        <button
          v-if="!isUserLogged"
          class="t-login-btn"
          @click="$router.push('/auth/login')"
        >
          <span class="t-login-btn-text"> Login </span>
        </button>
        <div v-else>
          <button class="t-user-pfp" @focus="handleMenu" @blur="handleMenu">
            <img
              src="https://lh3.googleusercontent.com/ogw/ADGmqu8sRtM4M9yFl7CpkeOACg_PdkgKN1JzOLCVAYAugQ=s32-c-mo"
            />
          </button>
        </div>

        <transition name="slide-fade">
          <ul v-if="isMenuOpen" class="t-user-menu">
            <div class="t-user-details">
              <img
                class="t-user-details-pfp w-2/4"
                src="https://lh3.googleusercontent.com/ogw/ADGmqu8sRtM4M9yFl7CpkeOACg_PdkgKN1JzOLCVAYAugQ=s32-c-mo"
              />
              <p class="t-user-details-name">Luiz A F Gomes</p>
              <p class="t-user-details-email">me@luizg.dev</p>
            </div>
            <li class="p-2">
              <hr />
            </li>
            <li>
              <nuxt-link to="/dashboard">Dashboard</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#" w>Logout</nuxt-link>
            </li>
            <li></li>
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
    isUserLogged: false,
  }),
  computed: {},
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

  margin-top: 5px;

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

    @apply pr-3;

    .t-header-nav {
      margin-top: auto;
      margin-bottom: auto;
      margin-right: 50px;

      ul {
        li {
          text-align: center;
          margin: 0px 5px 0px 5px;
          @apply inline;

          a {
            padding: 10px;
          }

          a:hover {
            background: #151515;
          }
        }
      }
    }

    .t-menu {
      float: right;
      margin-top: auto;
      margin-bottom: auto;

      height: 64px;
      min-height: 64px;
      max-height: 64px;

      .t-login-btn {
        background: #ffee00;

        padding: 10px 35px;
        margin-top: 10px;

        @apply rounded-md;
        @apply shadow-md;

        font-weight: bold;
        color: black;
      }

      .t-login-btn:hover > .t-login-btn-text i {
        opacity: 1;
      }

      .t-user-menu {
        @apply absolute;
        @apply text-black;

        @apply w-48;

        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        background: whitesmoke;

        right: 55px;

        .t-user-details {
          @apply flex;
          @apply flex-col;
          @apply justify-center;
          @apply items-center;

          margin: 10px;

          .t-user-details-pfp {
            @apply rounded-full;
          }

          .t-user-details-name {
            margin-top: 5px;
            font-weight: bold;
          }
        }

        li {
          a {
            @apply rounded;
            @apply py-2;
            @apply px-4;
            @apply block;
            @apply whitespace-no-wrap;

            background-color: whitesmoke;
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
  margin-top: auto;
  margin-bottom: auto;

  img {
    @apply rounded-full;

    width: 64px;
    min-width: 64px;
    max-width: 64px;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
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
