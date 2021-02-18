<template>
  <div class="login-container">
    <section class="login-screen sm:w-full md:w-3/4 lg:w-3/5 xl:w-2/6">
      <div class="login-card">
        <div class="logo-container">
          <img
            src="/logo-T.png"
            alt="Tidis logo"
            style="cursor: pointer"
            title="Home"
            @click="$router.push('/')"
          />
        </div>

        <h2 class="login-card-title md:text-justify">
          Login with your account!
        </h2>
        <p align="justify">
          Please, to proceed to your account use your, Google, Twitter, Facebook
          or GitHub accounts!
        </p>

        <div class="login-form-fields pt-10">
          <button class="login-with-google">
            <img src="/utils/Google__G__Logo.svg" alt="Google logo" />
            <span>Sign-in with Google</span>
          </button>
          <button class="login-with-twitter">
            <img src="/utils/twitter-bird-logo-white.svg" alt="Twitter logo" />
            <span>Sign-in with Twitter</span>
          </button>
          <button class="login-with-facebook">
            <img src="/utils/f_logo_RGB-White_250.png" alt="Facebook logo" />
            <span>Sign-in with Facebook</span>
          </button>
          <button class="login-with-github">
            <img src="/utils/GitHub-Mark-Light-64px.png" alt="Github logo" />
            <span>Sign-in with GitHub</span>
          </button>
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

.login-container {
  @apply flex;

  height: 100vh;
  margin: auto;

  .login-screen {
    @apply m-auto;
    @apply justify-center;

    user-select: none;

    .login-card {
      @apply p-10;
      @apply pt-5;
      @apply mx-auto;
      @apply rounded-md;
      @apply shadow-md;
      @apply border;
      @apply border-gray-100;
      @apply flex;
      @apply flex-col;

      background: whitesmoke;

      .logo-container {
        @apply flex;
        @apply pb-8;
        margin: auto;

        img {
          @apply w-24;
        }
      }

      .login-card-title {
        @apply text-3xl;
      }

      .login-form-fields {
        .login-with {
          padding: 5px;
          margin: auto;
          width: 250px;

          font-family: "Roboto", sans-serif;
          font-weight: 500;

          @apply flex;
          @apply align-middle;
          @apply rounded-sm;
          @apply shadow-md;

          background: #f9fafb;

          height: 40px;

          img {
            width: 18px;
            height: 18px;
            margin-right: 24px;
            margin-left: 8px;

            margin-top: auto;
            margin-bottom: auto;
          }

          span {
            margin-right: 8px;
            margin-top: auto;
            margin-bottom: auto;
          }

          &:hover {
            @apply bg-gray-200;
          }

          margin-bottom: 15px;
        }

        button.login-with-google {
          @extend .login-with;

          @apply border;
          @apply border-gray-200;

          margin-bottom: 15px;
        }

        button.login-with-github {
          @extend .login-with;

          background: #2c2c2c;
          @apply border;
          @apply border-gray-800;

          span {
            color: white;
          }

          &:hover {
            background: #151515;
          }

          margin-bottom: 15px;
        }

        button.login-with-twitter {
          @extend .login-with;

          background: #1d9bf0;

          span {
            color: white;
          }

          &:hover {
            background: #1189d8;
          }

          margin-bottom: 15px;
        }

        button.login-with-facebook {
          @extend .login-with;

          background: #1778f2;

          span {
            color: white;
          }

          &:hover {
            background: #1469d1;
          }

          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>
