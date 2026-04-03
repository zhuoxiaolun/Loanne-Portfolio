<template>
  <section class="special">
    <div class="special__bg" aria-hidden="true" />
    <div class="container special__inner">
      <p class="special__eyebrow">{{ data.eyebrow }}</p>
      <h2 class="special__title text-h1">
        <span v-for="(char, i) in titleChars" :key="i">
          <strong v-if="char === data.highlight" class="special__highlight">{{ char }}</strong>
          <template v-else>{{ char }}</template>
        </span>
      </h2>
      <p class="special__body text-body">{{ data.body }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  data: {
    eyebrow: string
    title: string
    body: string
    highlight?: string
  }
}>()

const titleChars = computed(() => props.data.title.split(''))
</script>

<style scoped>
.special {
  position: relative;
  overflow: hidden;
}

.special__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--cherry-50) 0%, var(--lake-blue-50) 100%);
}

.special__inner {
  position: relative;
  padding: var(--spacing-5xl) var(--spacing-l);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
  max-width: 760px;
}

.special__eyebrow {
  font-family: var(--font-serif-en);
  font-style: italic;
  font-size: 1rem;
  color: var(--cherry-600);
  letter-spacing: 0.08em;
}

.special__title {
  color: var(--neutral-900);
}

.special__highlight {
  color: var(--burgundy-500);
  font-weight: 800;
}

.special__body {
  color: var(--neutral-700);
  max-width: 540px;
}
</style>
