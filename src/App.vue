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
