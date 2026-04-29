<template>
  <div class="content-block" :class="[`content-block--${block.type}`, { 'content-block--large': block.type === 'text' && block.large }]">
    <!-- Text block -->
    <template v-if="block.type === 'text'">
      <p v-if="block.heading" class="section-label">
        {{ block.heading }}
      </p>
      <h2 v-if="block.subtitle" class="section-subtitle">{{ block.subtitle }}</h2>
      <div class="content-block__body" v-html="formattedBody" />
    </template>

    <!-- Image block -->
    <template v-else-if="block.type === 'image'">
      <AppImage
        :src="block.src"
        :alt="block.alt"
        :caption="block.caption"
      />
    </template>

    <!-- Gallery block -->
    <template v-else-if="block.type === 'gallery'">
      <p v-if="block.heading" class="section-label">{{ block.heading }}</p>
      <div class="content-block__gallery">
        <template v-if="block.images?.length">
          <img
            v-for="(src, i) in block.images"
            :key="i"
            :src="src"
            class="gallery__img"
            loading="lazy"
            alt=""
          />
        </template>
        <div v-else class="gallery__placeholder" />
      </div>
    </template>

    <!-- Strategy block -->
    <template v-else-if="block.type === 'strategy'">
      <p v-if="block.heading" class="section-label">{{ block.heading }}</p>
      <ol class="strategy-grid">
        <li
          v-for="(point, i) in block.points"
          :key="i"
          class="strategy-item"
        >
          <span class="strategy-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <strong class="strategy-title">{{ point.title }}</strong>
          <p class="strategy-body">{{ point.body }}</p>
        </li>
      </ol>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppImage from '@/components/atoms/AppImage.vue'
import type { ContentBlock } from '@/types'

const props = defineProps<{
  block: ContentBlock
}>()

const formattedBody = computed(() => {
  if (props.block.type !== 'text') return ''
  return props.block.body
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => `<p>${line}</p>`)
    .join('')
})
</script>

<style scoped>
.content-block {
  width: 100%;
}

/* Text block */
.content-block--text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

/* Section label — matches ProjectDetailView */
.section-label {
  font-family: var(--font-sans-zh);
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--neutral-600);
  margin: 0;
  line-height: 1.5;
}

/* Section subtitle — large headline */
.section-subtitle {
  font-family: var(--font-sans-zh);
  font-size: clamp(1.375rem, 2.5vw, 2rem);
  font-weight: 700;
  color: var(--neutral-900);
  line-height: 1.3;
  margin: 0;
}

/* Body */
.content-block__body {
  color: var(--neutral-700);
  font-family: var(--font-sans-zh);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.85;
}

.content-block__body :deep(p) {
  margin-bottom: var(--spacing-m);
}

.content-block__body :deep(p:last-child) {
  margin-bottom: 0;
}

/* Large text variant (editorial) */
.content-block--large .section-subtitle {
  font-size: clamp(1.75rem, 3vw, 2.75rem);
  font-weight: 600;
  line-height: 1.2;
}

.content-block--large .content-block__body {
  font-size: clamp(0.9375rem, 1.2vw, 1.0625rem);
  color: var(--neutral-800);
  line-height: 1.85;
}

/* Image block */
.content-block--image {
  /* inherits AppImage styles */
}

/* Gallery block */
.content-block--gallery {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

.content-block__gallery {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
}

.gallery__img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-m);
  display: block;
}

.gallery__placeholder {
  width: 100%;
  aspect-ratio: 16 / 7;
  background: var(--neutral-100);
  border-radius: var(--radius-m);
}

/* ─── Strategy block ─────────────────────────────────── */
.content-block--strategy {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.strategy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  padding: 0;
  margin: 0;
}

.strategy-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
  padding: var(--spacing-xl) var(--spacing-l) var(--spacing-xl) 0;
}

.strategy-item:not(:last-child) {
  padding-right: var(--spacing-xl);
}

.strategy-num {
  font-family: var(--font-serif-en);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(2rem, 3vw, 2.75rem);
  color: var(--cherry-500);
  line-height: 1;
  display: block;
}

.strategy-title {
  font-family: var(--font-sans-zh);
  font-size: clamp(1.0625rem, 1.5vw, 1.25rem);
  font-weight: 700;
  color: var(--neutral-900);
  line-height: 1.3;
}

.strategy-body {
  font-family: var(--font-sans-zh);
  font-size: 0.9375rem;
  color: var(--neutral-600);
  line-height: 1.8;
  margin: 0;
}

@media (max-width: 768px) {
  .strategy-grid {
    grid-template-columns: 1fr;
  }

  .strategy-item {
    padding-right: 0;
    padding-bottom: var(--spacing-l);
  }

  .strategy-item:not(:last-child) {
    padding-right: 0;
  }
}
</style>
