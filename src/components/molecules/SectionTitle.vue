<template>
  <div :class="['section-title', `section-title--${align}`]">
    <p v-if="eyebrow" class="section-title__eyebrow">{{ eyebrow }}</p>
    <component
      :is="level"
      class="section-title__heading"
      :class="headingClass"
    >
      <slot />
    </component>
    <p v-if="sub" class="section-title__sub text-small">{{ sub }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  eyebrow?: string
  sub?: string
  level?: 'h1' | 'h2' | 'h3'
  size?: 'display' | 'h1' | 'h2' | 'h3'
  align?: 'left' | 'center'
}>(), {
  level: 'h2',
  size: 'h2',
  align: 'left',
})

const headingClass = computed(() => `text-${props.size}`)
</script>

<style scoped>
.section-title {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.section-title--center {
  align-items: center;
  text-align: center;
}

.section-title__eyebrow {
  font-family: var(--font-serif-en);
  font-style: italic;
  font-size: 0.9375rem;
  color: var(--cherry-600);
  letter-spacing: 0.06em;
}

.section-title__heading {
  color: var(--neutral-900);
}

.section-title__sub {
  color: var(--neutral-600);
  margin-top: var(--spacing-xxs);
}
</style>
