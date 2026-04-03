<template>
  <div class="meta-item">
    <dt class="meta-item__label text-caption">{{ label }}</dt>
    <dd class="meta-item__value">{{ value }}</dd>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>

<style scoped>
.meta-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-tiny);
}

.meta-item__label {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--neutral-500);
  font-size: 0.6875rem;
}

.meta-item__value {
  font-family: var(--font-sans-zh);
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--neutral-900);
  line-height: 1.4;
}
</style>
