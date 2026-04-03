<template>
  <hr :class="['app-divider', `app-divider--${weight}`]" />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  weight?: 'thin' | 'base'
}>(), {
  weight: 'thin',
})
</script>

<style scoped>
.app-divider {
  border: none;
  border-top: 1px solid var(--neutral-50);
  margin: 0;
}
.app-divider--base {
  border-top-color: var(--neutral-100);
}
</style>
