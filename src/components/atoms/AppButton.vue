<template>
  <component
    :is="to ? RouterLink : 'button'"
    :to="to"
    :type="!to ? type : undefined"
    :class="['app-btn', `app-btn--${variant}`, { 'app-btn--full': full }]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  to?: string
  type?: 'button' | 'submit'
  full?: boolean
}>(), {
  variant: 'primary',
  type: 'button',
  full: false,
})
</script>

<style scoped>
.app-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-s) var(--spacing-l);
  border-radius: var(--radius-round);
  font-family: var(--font-sans-zh);
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  transition: background var(--transition-base), color var(--transition-base), border-color var(--transition-base);
  white-space: nowrap;
  text-decoration: none;
}

.app-btn--full {
  width: 100%;
}

/* Primary — cherry */
.app-btn--primary {
  background: var(--cherry-500);
  color: var(--neutral-900);
  border: 1.5px solid transparent;
}
.app-btn--primary:hover {
  background: var(--cherry-600);
}
.app-btn--primary:active {
  background: var(--cherry-700);
}

/* Secondary — lake blue outline */
.app-btn--secondary {
  background: transparent;
  color: var(--lake-blue-600);
  border: 1.5px solid var(--lake-blue-600);
}
.app-btn--secondary:hover {
  background: var(--lake-blue-50);
  border-color: var(--lake-blue-700);
  color: var(--lake-blue-700);
}
.app-btn--secondary:active {
  background: var(--lake-blue-100);
}

/* Ghost — no border */
.app-btn--ghost {
  background: transparent;
  color: var(--neutral-600);
  border: 1.5px solid transparent;
  padding-left: var(--spacing-s);
  padding-right: var(--spacing-s);
}
.app-btn--ghost:hover {
  color: var(--neutral-900);
  background: var(--neutral-50);
}
</style>
