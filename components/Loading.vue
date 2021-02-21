<template lang="html">
  <div class="loading-component">
    <div class="tidis-loading-spinner">
      <svg viewBox="25 25 50 50" class="circular">
        <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
.loading-component {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;

  backdrop-filter: blur(2px) grayscale(0.5);

  .tidis-loading-spinner {
    @apply flex;
    @apply flex-col;
    @apply justify-center;
    height: 100vh;

    .circular {
      margin: auto;

      height: 35px;
      width: 35px;
      animation: loading-rotate 4s linear infinite;
    }
    .path {
      animation: loading-dash 1.89s ease-in-out infinite;
      stroke-dasharray: 90, 150;
      stroke-dashoffset: 0;
      stroke-width: 1;
      stroke: #0bb867;
      stroke-linecap: round;
      stroke-width: 7px;
    }
  }
}

@keyframes loading-rotate {
  100% {
    transform: rotate(3turn);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
