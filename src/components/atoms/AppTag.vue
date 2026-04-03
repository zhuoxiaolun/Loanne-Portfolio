<template>
  <span :class="['app-tag', `app-tag--${color}`]">
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  color?: 'cherry' | 'lake' | 'burgundy' | 'lapis' | 'neutral'
}>(), {
  color: 'cherry',
})
</script>

<style scoped>
.app-tag {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-tiny) var(--spacing-xs);
  border-radius: var(--radius-xxs);
  font-size: 0.75rem;
  font-weight: 700;
  font-family: var(--font-sans-zh);
  line-height: 1.4;
  white-space: nowrap;
}

.app-tag--cherry {
  background: var(--cherry-100);
  color: var(--cherry-700);
}

.app-tag--lake {
  background: var(--lake-blue-100);
  color: var(--lake-blue-700);
}

.app-tag--burgundy {
  background: var(--burgundy-50);
  color: var(--burgundy-500);
}

.app-tag--lapis {
  background: var(--lapis-50);
  color: var(--lapis-500);
}

.app-tag--neutral {
  background: var(--neutral-50);
  color: var(--neutral-700);
}
</style>
