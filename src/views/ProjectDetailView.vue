<template>
  <main v-if="project" class="project-detail">

    <!-- Header -->
    <div class="project-detail__header">
      <div class="project-detail__header-bg" aria-hidden="true" />
      <div class="container project-detail__header-inner">
        <RouterLink to="/projects" class="project-detail__back">
          ← 返回作品集
        </RouterLink>

        <!-- Horizontal meta pills -->
        <div class="project-detail__meta-pills">
          <span class="meta-pill">年度：{{ project.detail.metadata.year }}</span>
          <span class="meta-pill">類型：{{ project.detail.metadata.projectType }}</span>
          <span class="meta-pill">職責：{{ project.detail.metadata.role }}</span>
          <span class="meta-pill">客戶：{{ project.detail.metadata.client }}</span>
          <span class="meta-pill">時程：{{ project.detail.metadata.duration }}</span>
        </div>

        <h1 class="project-detail__title text-h1">{{ project.title }}</h1>
        <p class="project-detail__title-en">{{ project.titleEn }}</p>
        <p class="project-detail__summary text-body">{{ project.summary }}</p>
      </div>
    </div>

    <!-- Cover image -->
    <div class="container project-detail__cover">
      <AppImage
        :src="project.coverImage"
        :alt="project.title"
        :lazy="false"
      />
    </div>

    <!-- Single-column article -->
    <div class="container project-detail__content">
      <article class="project-detail__article">

        <!-- Overview -->
        <section class="article-section">
          <h2 class="section-label">專案概述</h2>
          <p class="text-body">{{ project.detail.overview }}</p>
        </section>

        <!-- Background -->
        <section class="article-section">
          <h2 class="section-label">專案背景</h2>
          <p class="text-body">{{ project.detail.background }}</p>
        </section>

        <!-- Process phases -->
        <section v-if="project.detail.process.length" class="article-section">
          <h2 class="section-label">設計流程</h2>
          <ol class="process-grid">
            <li
              v-for="(phase, i) in project.detail.process"
              :key="i"
              class="process-item"
            >
              <span class="process-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <strong class="process-phase-name">{{ phase.phase }}</strong>
              <p class="process-phase-desc">{{ phase.description }}</p>
            </li>
          </ol>
        </section>

        <!-- Content blocks -->
        <ContentBlock
          v-for="(block, i) in project.detail.contentBlocks"
          :key="i"
          :block="block"
          class="article-section"
        />

        <!-- Founder feedback quote -->
        <blockquote
          v-if="project.detail.founderFeedback"
          class="project-detail__quote"
        >
          <p class="project-detail__quote-text">
            「{{ project.detail.founderFeedback.quote }}」
          </p>
          <footer class="project-detail__quote-author text-small">
            — {{ project.detail.founderFeedback.author }}
          </footer>
        </blockquote>

      </article>
    </div>

    <!-- Bottom nav -->
    <div class="container project-detail__bottom-nav">
      <AppButton variant="secondary" to="/projects">← 返回作品集</AppButton>
      <div class="project-detail__adjacent">
        <AppButton v-if="prevProject" variant="ghost" :to="`/projects/${prevProject.id}`">
          ← {{ prevProject.title }}
        </AppButton>
        <AppButton v-if="nextProject" variant="ghost" :to="`/projects/${nextProject.id}`">
          {{ nextProject.title }} →
        </AppButton>
      </div>
    </div>

  </main>

  <!-- Not found -->
  <main v-else class="container" style="padding-top: 160px; padding-bottom: 80px;">
    <p class="text-body">找不到此專案。</p>
    <AppButton variant="primary" to="/projects" style="margin-top: 24px;">返回作品集</AppButton>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppImage from '@/components/atoms/AppImage.vue'
import AppButton from '@/components/atoms/AppButton.vue'
import ContentBlock from '@/components/molecules/ContentBlock.vue'
import projectsData from '@/data/projects.json'
import type { Project } from '@/types'

const route = useRoute()
const allProjects = projectsData.projects as Project[]

const project = computed(() =>
  allProjects.find(p => p.id === route.params.id)
)

const currentIndex = computed(() =>
  allProjects.findIndex(p => p.id === route.params.id)
)

const prevProject = computed(() =>
  currentIndex.value > 0 ? allProjects[currentIndex.value - 1] : null
)

const nextProject = computed(() =>
  currentIndex.value < allProjects.length - 1 ? allProjects[currentIndex.value + 1] : null
)
</script>

<style scoped>
/* ─── Header ─────────────────────────────────────────── */
.project-detail__header {
  position: relative;
  overflow: hidden;
  padding-top: calc(80px + var(--spacing-3xl));
  padding-bottom: var(--spacing-4xl);
}

.project-detail__header-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--rose-100) 0%, var(--neutral-0) 100%);
}

.project-detail__header-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  max-width: 760px;
}

.project-detail__back {
  color: var(--neutral-500);
  text-decoration: none;
  font-size: 0.875rem;
  font-family: var(--font-sans-zh);
  transition: color var(--transition-base);
  align-self: flex-start;
}

.project-detail__back:hover {
  color: var(--cherry-600);
}

/* ─── Meta pills ─────────────────────────────────────── */
.project-detail__meta-pills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.meta-pill {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: var(--radius-round);
  background: var(--neutral-0);
  border: 1px solid var(--neutral-100);
  font-family: var(--font-sans-zh);
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--neutral-600);
  white-space: nowrap;
}

/* ─── Title / summary ────────────────────────────────── */
.project-detail__title {
  color: var(--neutral-900);
  margin-top: var(--spacing-xs);
}

.project-detail__title-en {
  font-family: var(--font-serif-en);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: var(--neutral-700);
  line-height: 1.2;
}

.project-detail__summary {
  color: var(--neutral-700);
}

/* ─── Cover image ────────────────────────────────────── */
.project-detail__cover {
  margin-bottom: var(--spacing-4xl);
}

/* ─── Article (single column) ────────────────────────── */
.project-detail__content {
  padding-bottom: var(--spacing-6xl);
}

.project-detail__article {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4xl);
}

.article-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

.section-label {
  font-family: var(--font-sans-zh);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--neutral-400);
}

/* ─── Process grid ───────────────────────────────────── */
.process-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-l);
  list-style: none;
  padding: 0;
}

.process-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-l);
  background: var(--cherry-50);
  border-radius: var(--radius-m);
  border: 1px solid var(--neutral-100);
}

.process-num {
  font-family: var(--font-serif-en);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--cherry-500);
  line-height: 1;
}

.process-phase-name {
  font-family: var(--font-sans-zh);
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--neutral-900);
}

.process-phase-desc {
  font-family: var(--font-sans-zh);
  font-size: 0.875rem;
  color: var(--neutral-600);
  line-height: 1.7;
}

/* ─── Quote ──────────────────────────────────────────── */
.project-detail__quote {
  background: var(--lake-blue-50);
  border-left: 3px solid var(--lake-blue-500);
  border-radius: 0 var(--radius-m) var(--radius-m) 0;
  padding: var(--spacing-l) var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
}

.project-detail__quote-text {
  font-family: var(--font-sans-zh);
  font-size: 1.0625rem;
  font-weight: 400;
  color: var(--neutral-800);
  line-height: 1.8;
  font-style: italic;
}

.project-detail__quote-author {
  color: var(--lake-blue-600);
  font-weight: 700;
}

/* ─── Bottom nav ─────────────────────────────────────── */
.project-detail__bottom-nav {
  padding-bottom: var(--spacing-5xl);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--neutral-100);
  padding-top: var(--spacing-xl);
}

.project-detail__adjacent {
  display: flex;
  gap: var(--spacing-s);
}

/* ─── Responsive ─────────────────────────────────────── */
@media (max-width: 640px) {
  .process-grid {
    grid-template-columns: 1fr;
  }

  .project-detail__bottom-nav {
    flex-direction: column;
    gap: var(--spacing-m);
    align-items: flex-start;
  }
}
</style>
