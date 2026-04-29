<template>
  <div class="app">
    <AppNavBar />
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNavBar from '@/components/molecules/AppNavBar.vue'
import AppFooter from '@/components/molecules/AppFooter.vue'
</script>

<style>
@import '@/styles/global.css';

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Single unified rose haze — spans navbar → footer with no seams */
  background:
    radial-gradient(ellipse 70% 28% at -5% 2%,  rgba(250, 173, 189, 0.30) 0%, transparent 65%),
    radial-gradient(ellipse 55% 22% at 108% 6%,  rgba(252, 244, 244, 0.75) 0%, transparent 60%),
    radial-gradient(ellipse 50% 18% at -8%  42%,  rgba(252, 230, 235, 0.18) 0%, transparent 60%),
    radial-gradient(ellipse 40% 16% at 106% 52%, rgba(239, 243, 250, 0.28) 0%, transparent 55%),
    radial-gradient(ellipse 65% 22% at 6%   96%,  rgba(250, 173, 189, 0.20) 0%, transparent 60%),
    radial-gradient(ellipse 50% 18% at 102% 92%, rgba(252, 244, 244, 0.40) 0%, transparent 55%);
}

/* Route transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
