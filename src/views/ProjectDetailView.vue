<template>
  <main v-if="project" class="project-detail">

    <!-- Header -->
    <div class="project-detail__header">
      <div class="project-detail__header-bg" aria-hidden="true" />
      <div class="container project-detail__header-inner">
        <RouterLink to="/projects" class="project-detail__back text-small">
          ← 返回作品集
        </RouterLink>
        <div class="project-detail__tags">
          <AppTag
            v-for="tag in project.tags"
            :key="tag"
            color="cherry"
          >{{ tag }}</AppTag>
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

    <!-- Body: sidebar + content -->
    <div class="container project-detail__body">

      <!-- Sidebar: metadata -->
      <aside class="project-detail__sidebar">
        <div class="project-detail__meta-card">
          <dl class="project-detail__meta-list">
            <MetaItem label="年度" :value="project.detail.metadata.year" />
            <MetaItem label="專案類型" :value="project.detail.metadata.projectType" />
            <MetaItem label="職責範圍" :value="project.detail.metadata.role" />
            <MetaItem label="客戶 / 主辦單位" :value="project.detail.metadata.client" />
            <MetaItem label="時程" :value="project.detail.metadata.duration" />
          </dl>
        </div>

        <!-- Process phases -->
        <div v-if="project.detail.process.length" class="project-detail__process">
          <h2 class="project-detail__process-title text-h4">設計流程</h2>
          <ol class="project-detail__process-list">
            <li
              v-for="(phase, i) in project.detail.process"
              :key="i"
              class="project-detail__process-item"
            >
              <span class="project-detail__process-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <div>
                <strong class="project-detail__phase-name text-small">{{ phase.phase }}</strong>
                <p class="text-small">{{ phase.description }}</p>
              </div>
            </li>
          </ol>
        </div>
      </aside>

      <!-- Main content -->
      <article class="project-detail__article">

        <!-- Overview -->
        <section class="project-detail__overview">
          <h2 class="text-h3">專案概述</h2>
          <p class="text-body">{{ project.detail.overview }}</p>
        </section>

        <section class="project-detail__background">
          <h2 class="text-h3">專案背景</h2>
          <p class="text-body">{{ project.detail.background }}</p>
        </section>

        <!-- Content blocks (text + image) -->
        <ContentBlock
          v-for="(block, i) in project.detail.contentBlocks"
          :key="i"
          :block="block"
          class="project-detail__block"
        />

        <!-- Founder feedback -->
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
import AppTag from '@/components/atoms/AppTag.vue'
import AppImage from '@/components/atoms/AppImage.vue'
import AppButton from '@/components/atoms/AppButton.vue'
import MetaItem from '@/components/molecules/MetaItem.vue'
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
  transition: color var(--transition-base);
  align-self: flex-start;
}

.project-detail__back:hover {
  color: var(--cherry-600);
}

.project-detail__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xxs);
}

.project-detail__title {
  color: var(--neutral-900);
}

.project-detail__title-en {
  font-family: var(--font-serif-en);
  font-style: italic;
  font-size: 1.25rem;
  color: var(--neutral-600);
  margin-top: calc(var(--spacing-s) * -1);
}

.project-detail__summary {
  color: var(--neutral-700);
}

/* Cover */
.project-detail__cover {
  margin-bottom: var(--spacing-4xl);
}

/* Body layout */
.project-detail__body {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--spacing-4xl);
  align-items: start;
  padding-bottom: var(--spacing-6xl);
}

/* Sidebar */
.project-detail__sidebar {
  position: sticky;
  top: calc(80px + var(--spacing-l));
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.project-detail__meta-card {
  background: var(--neutral-0);
  border: 1px solid var(--neutral-100);
  border-radius: var(--radius-l);
  padding: var(--spacing-l);
  box-shadow: var(--shadow-card);
}

.project-detail__meta-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

.project-detail__process {
  background: var(--cherry-50);
  border-radius: var(--radius-l);
  padding: var(--spacing-l);
}

.project-detail__process-title {
  color: var(--neutral-900);
  margin-bottom: var(--spacing-m);
}

.project-detail__process-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

.project-detail__process-item {
  display: flex;
  gap: var(--spacing-s);
  align-items: flex-start;
}

.project-detail__process-num {
  font-family: var(--font-serif-en);
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--cherry-500);
  line-height: 1.2;
  flex-shrink: 0;
  width: 28px;
}

.project-detail__phase-name {
  display: block;
  font-weight: 700;
  color: var(--neutral-900);
  margin-bottom: var(--spacing-xxs);
}

/* Article */
.project-detail__article {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
}

.project-detail__overview,
.project-detail__background {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

.project-detail__block {
  /* spacing handled by gap above */
}

/* Quote */
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

/* Bottom nav */
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

@media (max-width: 1024px) {
  .project-detail__body {
    grid-template-columns: 1fr;
  }
  .project-detail__sidebar {
    position: static;
  }
  .project-detail__meta-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-m);
  }
  .project-detail__meta-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .project-detail__bottom-nav {
    flex-direction: column;
    gap: var(--spacing-m);
    align-items: flex-start;
  }
  .project-detail__meta-list {
    grid-template-columns: 1fr;
  }
}
</style>
