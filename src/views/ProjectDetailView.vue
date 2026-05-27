<template>
  <main v-if="project" class="project-detail">

    <!-- Back link -->
    <div class="container project-detail__breadcrumb">
      <RouterLink to="/projects" class="project-detail__back">
        <span class="project-detail__back-arrow">←</span>
        Back
      </RouterLink>
    </div>

    <!-- Hero -->
    <div class="project-detail__hero">
      <div class="container project-detail__hero-inner">
        <div class="project-detail__title-row">
          <h1 class="project-detail__title">{{ project.title }}</h1>
          <AppButton
            v-if="project.liveUrl"
            variant="secondary"
            size="lg"
            :href="project.liveUrl"
            :aria-label="`查看 ${project.title} 真實專案`"
            class="project-detail__live-btn"
          >
            View Live
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 3h6v6"/>
              <path d="M10 14 21 3"/>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            </svg>
          </AppButton>
        </div>
        <p class="project-detail__title-en">{{ project.titleEn }}</p>
        <p class="project-detail__summary">{{ project.summary }}</p>
      </div>
      <!-- Banner-design uses a static hero image -->
      <div v-if="project.id === 'banner-design'" class="project-detail__cover">
        <img :src="bannerMainImg" alt="Banner 視覺設計" class="project-detail__hero-img" />
      </div>
      <div v-else-if="project.id === 'sake-union'" class="project-detail__cover">
        <img :src="sakeHeroImage" :alt="project.title" class="project-detail__hero-img" />
      </div>
      <div v-else-if="project.id === 'zero-to-one'" class="project-detail__cover">
        <img :src="zeroHeroImage" :alt="project.title" class="project-detail__hero-img" />
      </div>
      <div v-else-if="project.id === 'pinkrun'" class="project-detail__cover">
        <img :src="pinkHeroImage" :alt="project.title" class="project-detail__hero-img" />
      </div>
      <div v-else class="project-detail__cover">
        <AppImage
          :src="project.coverImage"
          :alt="project.title"
          :lazy="false"
        />
      </div>
    </div>

    <!-- Metadata row + tags -->
    <div class="container project-detail__meta-row">
      <div class="project-detail__meta-pills">
        <span class="meta-pill">
          <span class="meta-pill__label">年度</span>
          <span class="meta-pill__value">{{ project.detail.metadata.year }}</span>
        </span>
        <span class="meta-pill__divider" aria-hidden="true" />
        <span class="meta-pill">
          <span class="meta-pill__label">類型</span>
          <span class="meta-pill__value">{{ project.detail.metadata.projectType }}</span>
        </span>
        <span class="meta-pill__divider" aria-hidden="true" />
        <span class="meta-pill">
          <span class="meta-pill__label">職責</span>
          <span class="meta-pill__value">{{ project.detail.metadata.role }}</span>
        </span>
        <template v-if="project.detail.metadata.duration">
          <span class="meta-pill__divider" aria-hidden="true" />
          <span class="meta-pill">
            <span class="meta-pill__label">時程</span>
            <span class="meta-pill__value">{{ project.detail.metadata.duration }}</span>
          </span>
        </template>
      </div>

      <div v-if="project.tags?.length" class="project-detail__tags">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="project-detail__tag"
        >{{ tag }}</span>
      </div>
    </div>

    <!-- Star divider -->
    <div class="container project-detail__star-divider" aria-hidden="true">
      <span class="star-divider__line" />
      <span class="star-divider__star">✦</span>
      <span class="star-divider__line" />
    </div>

    <!-- Banner-design: specialized content with real image galleries -->
    <div v-if="project.id === 'banner-design'" class="container project-detail__content">
      <BannerDesignDetail />
    </div>

    <!-- Sake-union: specialized content with image galleries -->
    <div v-else-if="project.id === 'sake-union'" class="container project-detail__content">
      <SakeUnionDetail :project="project" />
    </div>

    <!-- Zero-to-one: specialized content with image galleries -->
    <div v-else-if="project.id === 'zero-to-one'" class="container project-detail__content">
      <ZeroToOneDetail :project="project" />
    </div>

    <!-- Pinkrun: specialized content with image galleries -->
    <div v-else-if="project.id === 'pinkrun'" class="container project-detail__content">
      <PinkrunDetail :project="project" />
    </div>

    <!-- Single-column article (all other projects) -->
    <div v-else class="container project-detail__content">
      <article class="project-detail__article">

        <!-- Overview -->
        <section v-if="project.detail.overview" class="article-section">
          <p class="section-label">專案概述</p>
          <h2 v-if="project.detail.overviewSubtitle" class="section-subtitle">{{ project.detail.overviewSubtitle }}</h2>
          <div class="section-body" v-html="formatBody(project.detail.overview)" />
        </section>

        <!-- Background -->
        <section v-if="project.detail.background" class="article-section">
          <p class="section-label">專案背景</p>
          <h2 v-if="project.detail.backgroundSubtitle" class="section-subtitle">{{ project.detail.backgroundSubtitle }}</h2>
          <div class="section-body" v-html="formatBody(project.detail.background)" />
        </section>

        <!-- Process phases -->
        <section v-if="project.detail.process.length" class="article-section">
          <p class="section-label">設計流程</p>
          <h2 v-if="project.detail.processSubtitle" class="section-subtitle">{{ project.detail.processSubtitle }}</h2>
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
          <footer class="project-detail__quote-author">
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
    <p class="section-body">找不到此專案。</p>
    <AppButton variant="primary" to="/projects" style="margin-top: 24px;">返回作品集</AppButton>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppImage from '@/components/atoms/AppImage.vue'
import AppButton from '@/components/atoms/AppButton.vue'
import ContentBlock from '@/components/molecules/ContentBlock.vue'
import BannerDesignDetail from '@/components/organisms/BannerDesignDetail.vue'
import SakeUnionDetail from '@/components/organisms/SakeUnionDetail.vue'
import ZeroToOneDetail from '@/components/organisms/ZeroToOneDetail.vue'
import PinkrunDetail from '@/components/organisms/PinkrunDetail.vue'
import { sakeHeroImage, sakeCoverImage } from '@/data/sake-images'
import { zeroHeroImage } from '@/data/zero-images'
import { pinkHeroImage } from '@/data/pink-images'
import bannerMainImg from '@/assets/b-04-hero.png'
import homeData from '@/data/home.json'
import projectsData from '@/data/projects.json'
import type { Project } from '@/types'

const route = useRoute()
const allProjects = [
  ...homeData.featuredProjects.projects,
  ...projectsData.projects,
] as Project[]

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

function formatBody(text: string): string {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
  const parts: string[] = []
  let i = 0
  while (i < lines.length) {
    if (lines[i].startsWith('•')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('•')) {
        items.push(`<li>${lines[i].slice(1).trim()}</li>`)
        i++
      }
      parts.push(`<ul>${items.join('')}</ul>`)
    } else {
      parts.push(`<p>${lines[i]}</p>`)
      i++
    }
  }
  return parts.join('')
}
</script>

<style scoped>
/* ─── Breadcrumb / Back ──────────────────────────────── */
.project-detail__breadcrumb {
  padding-top: calc(80px + var(--spacing-l));
  padding-bottom: var(--spacing-m);
}

.project-detail__back {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--neutral-600);
  text-decoration: none;
  font-family: var(--font-serif-en);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  transition: color var(--transition-base);
}

.project-detail__back:hover {
  color: var(--cherry-600);
}

.project-detail__back-arrow {
  font-style: normal;
  transition: transform var(--transition-base);
}

.project-detail__back:hover .project-detail__back-arrow {
  transform: translateX(-4px);
}

/* ─── Hero ───────────────────────────────────────────── */
.project-detail__hero {
  padding-bottom: var(--spacing-3xl);
}

.project-detail__hero-inner {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-2xl);
}

.project-detail__title-row {
  display: flex;
  align-items: flex-end;
  gap: var(--spacing-m);
  flex-wrap: wrap;
}

.project-detail__title {
  font-family: var(--font-sans-zh);
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 700;
  color: var(--neutral-900);
  line-height: 1.2;
  margin: 0;
}

/* title-row uses align-items: flex-end; this nudges the button off the baseline */
.project-detail__live-btn {
  margin-bottom: 6px;
}

.project-detail__title-en {
  font-family: var(--font-serif-en);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(1.125rem, 2vw, 1.625rem);
  color: var(--neutral-500);
  line-height: 1.3;
  margin: 0;
}

.project-detail__summary {
  font-family: var(--font-sans-zh);
  font-size: 1rem;
  font-weight: 400;
  color: var(--neutral-700);
  line-height: 1.8;
  margin: 0;
}

/* ─── Cover image ────────────────────────────────────── */
.project-detail__cover {
  width: 100%;
}

.project-detail__hero-img {
  width: 100%;
  height: 567px;
  object-fit: cover;
  display: block;
}

/* ─── Metadata row ───────────────────────────────────── */
.project-detail__meta-row {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-l);
}

.project-detail__meta-pills {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-s);
}

.meta-pill {
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
  font-family: var(--font-sans-zh);
  font-size: 0.875rem;
}

.meta-pill__label {
  font-weight: 400;
  color: var(--neutral-500);
  white-space: nowrap;
  min-width: 2em;
  flex-shrink: 0;
}

.meta-pill__value {
  font-weight: 600;
  color: var(--neutral-800);
  line-height: 1.6;
}

.meta-pill__divider {
  display: none;
}

/* ─── Tags ───────────────────────────────────────────── */
.project-detail__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.project-detail__tag {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: var(--radius-xxs);
  background: var(--cherry-100);
  color: var(--cherry-700);
  font-family: var(--font-sans-zh);
  font-size: 0.8125rem;
  font-weight: 700;
}

/* ─── Star divider ───────────────────────────────────── */
.project-detail__star-divider {
  display: flex;
  align-items: center;
  gap: var(--spacing-m);
  padding-top: var(--spacing-l);
  padding-bottom: var(--spacing-4xl);
}

.star-divider__line {
  flex: 1;
  height: 1px;
  background: var(--neutral-100);
}

.star-divider__star {
  font-size: 0.875rem;
  color: var(--neutral-300);
  flex-shrink: 0;
}

/* ─── Article ────────────────────────────────────────── */
.project-detail__content {
  padding-bottom: var(--spacing-6xl);
}

.project-detail__article {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5xl);
}

.article-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

/* ─── Section typography ─────────────────────────────── */
.section-label {
  font-family: var(--font-sans-zh);
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--neutral-600);
  margin: 0;
  line-height: 1.5;
}

.section-subtitle {
  font-family: var(--font-sans-zh);
  font-size: clamp(1.375rem, 2.5vw, 2rem);
  font-weight: 700;
  color: var(--neutral-900);
  line-height: 1.3;
  margin: 0;
}

.section-body {
  font-family: var(--font-sans-zh);
  font-size: 1rem;
  font-weight: 400;
  color: var(--neutral-700);
  line-height: 1.85;
  margin: 0;
}

.section-body :deep(p) {
  margin-bottom: var(--spacing-m);
}

.section-body :deep(p:last-child) {
  margin-bottom: 0;
}

.section-body :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-m);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.section-body :deep(ul:last-child) {
  margin-bottom: 0;
}

.section-body :deep(li) {
  padding-left: 1.25em;
  position: relative;
  line-height: 1.85;
}

.section-body :deep(li)::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--neutral-500);
}

/* ─── Process grid ───────────────────────────────────── */
.process-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-l);
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 100%;
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
  font-size: 1.375rem;
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
  margin: 0;
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
  margin: 0;
}

.project-detail__quote-text {
  font-family: var(--font-sans-zh);
  font-size: 1.0625rem;
  font-weight: 400;
  color: var(--neutral-800);
  line-height: 1.8;
  font-style: italic;
  margin: 0;
}

.project-detail__quote-author {
  color: var(--lake-blue-600);
  font-family: var(--font-sans-zh);
  font-size: 0.875rem;
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

  .project-detail__adjacent {
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    width: 100%;
  }

  .meta-pill__divider {
    display: none;
  }
}
</style>
