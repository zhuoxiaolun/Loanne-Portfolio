<template>
  <a
    v-if="href"
    :href="href"
    :target="target"
    rel="noopener noreferrer"
    :class="['app-btn', `app-btn--${variant}`, `app-btn--${size}`, { 'app-btn--full': full }]"
    v-bind="$attrs"
  ><slot /></a>
  <RouterLink
    v-else-if="to"
    :to="to"
    :class="['app-btn', `app-btn--${variant}`, `app-btn--${size}`, { 'app-btn--full': full }]"
    v-bind="$attrs"
  ><slot /></RouterLink>
  <button
    v-else
    :type="type"
    :class="['app-btn', `app-btn--${variant}`, `app-btn--${size}`, { 'app-btn--full': full }]"
    v-bind="$attrs"
  ><slot /></button>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({ inheritAttrs: false })

withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  target?: string
  type?: 'button' | 'submit'
  full?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  target: '_blank',
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
  border-radius: var(--radius-round);
  font-family: var(--font-sans-zh);
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

/* Size: md (default) */
.app-btn--md {
  padding: var(--spacing-s) var(--spacing-l);
  font-size: 0.9375rem;
}

/* Size: sm — for inline/card buttons */
.app-btn--sm {
  padding: var(--spacing-xxs) var(--spacing-l);
  font-size: 0.875rem;
  gap: var(--spacing-tiny);
}

/* Size: lg — for prominent CTAs */
.app-btn--lg {
  padding: var(--spacing-m) var(--spacing-xl);
  font-size: 1rem;
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
  background: var(--lake-blue-600);
  border-color: var(--lake-blue-600);
  color: var(--neutral-0);
}
.app-btn--secondary:active {
  background: var(--lake-blue-700);
  border-color: var(--lake-blue-700);
  color: var(--neutral-0);
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
