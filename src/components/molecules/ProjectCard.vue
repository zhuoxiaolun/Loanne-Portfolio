<template>
  <article :id="project.id" class="project-card" :class="[`project-card--${variant}`]">
    <RouterLink :to="`/projects/${project.id}`" class="project-card__image-wrap">
      <img
        :src="project.coverImage"
        :alt="project.title"
        loading="lazy"
        class="project-card__image"
        @error="onImgError"
      />
    </RouterLink>

    <div class="project-card__body">
      <div class="project-card__title-row">
        <RouterLink :to="`/projects/${project.id}`" class="project-card__title-link">
          <h3 class="project-card__title">{{ project.title }}</h3>
        </RouterLink>
        <AppButton
          v-if="project.liveUrl"
          variant="secondary"
          size="md"
          :href="project.liveUrl"
          :aria-label="`查看 ${project.title} 真實專案`"
          class="project-card__live-btn"
        >
          View Live
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M15 3h6v6"/>
            <path d="M10 14 21 3"/>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          </svg>
        </AppButton>
      </div>
      <p class="project-card__summary text-small">{{ project.summary }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import AppButton from '@/components/atoms/AppButton.vue'
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
}

/* ─── Title row ─────────────────────────────────────── */
.project-card__title-row {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xs);
}

.project-card__title-link {
  flex: 1;
  min-width: 0;
  display: block;
  text-decoration: none;
  color: inherit;
}

.project-card__live-btn {
  flex-shrink: 0;
  margin-top: var(--spacing-xs);
}

/* Banner variant (home + projects pages) */
.project-card--banner .project-card__image-wrap {
  display: block;
  aspect-ratio: 5 / 2;
  overflow: hidden;
  border-radius: var(--radius-m);
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
  font-size: clamp(1.375rem, 2.2vw, 2rem);
  color: var(--neutral-900);
  line-height: 1.35;
}

.project-card--banner .project-card__summary {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  color: var(--neutral-600);
  line-height: 1.7;
}

/* Grid variant (projects page categories) */
.project-card--grid {
  background: var(--neutral-0);
  border: 1px solid var(--neutral-100);
  border-radius: var(--radius-l);
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
  cursor: pointer;
}

.project-card--grid:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
  border-color: var(--neutral-300);
}

.project-card--grid .project-card__image-wrap {
  display: block;
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
