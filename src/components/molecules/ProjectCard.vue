<template>
  <RouterLink
    :to="`/projects/${project.id}`"
    class="project-card"
    :class="[`project-card--${variant}`]"
  >
    <div class="project-card__image-wrap">
      <img
        :src="project.coverImage"
        :alt="project.title"
        loading="lazy"
        class="project-card__image"
        @error="onImgError"
      />
    </div>

    <div class="project-card__body">
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p class="project-card__summary text-small">{{ project.summary }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Project } from '@/types'

withDefaults(defineProps<{
  project: Project
  variant?: 'banner' | 'grid'
}>(), {
  variant: 'banner',
})

function onImgError(e: Event) {
  const img = e.target as HTMLImageElement
  img.style.background = 'var(--rose-200)'
  img.removeAttribute('src')
}
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
}

/* Banner variant (home + projects pages) */
.project-card--banner .project-card__image-wrap {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--radius-l);
  background: var(--neutral-100);
  transition: box-shadow var(--transition-base);
}

.project-card--banner:hover .project-card__image-wrap {
  box-shadow: var(--shadow-hover);
}

.project-card--banner .project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 300ms ease;
}

.project-card--banner:hover .project-card__image {
  transform: scale(1.02);
}

.project-card--banner .project-card__body {
  padding: var(--spacing-l) 0 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.project-card--banner .project-card__title {
  font-family: var(--font-sans-zh);
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--neutral-900);
}

.project-card--banner .project-card__summary {
  color: var(--neutral-600);
}

/* Grid variant (projects page categories) */
.project-card--grid {
  background: var(--neutral-0);
  border: 1px solid var(--neutral-100);
  border-radius: var(--radius-l);
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
}

.project-card--grid:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
  border-color: var(--neutral-300);
}

.project-card--grid .project-card__image-wrap {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--rose-200);
}

.project-card--grid .project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 300ms ease;
}

.project-card--grid:hover .project-card__image {
  transform: scale(1.04);
}

.project-card--grid .project-card__body {
  padding: var(--spacing-l);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
}

.project-card--grid .project-card__title {
  font-family: var(--font-sans-zh);
  font-weight: 700;
  font-size: 1rem;
  color: var(--neutral-900);
}

.project-card--grid .project-card__summary {
  color: var(--neutral-600);
}
</style>
