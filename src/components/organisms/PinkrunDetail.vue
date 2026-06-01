<template>
  <article class="project-detail__article">

    <!-- 專案概述 -->
    <section v-if="project.detail.overview" class="article-section">
      <p class="section-label">專案概述</p>
      <h2 v-if="project.detail.overviewSubtitle" class="section-subtitle">{{ project.detail.overviewSubtitle }}</h2>
      <p class="section-body">{{ project.detail.overview }}</p>
    </section>

    <!-- 11 週年主視覺 -->
    <section class="article-section">
      <p class="section-label">11 週年主視覺</p>
      <div class="pink-image pink-image--full">
        <img :src="pinkImg1" alt="裙襬澎澎 RUN 11週年主視覺插畫" />
      </div>
    </section>

    <!-- 視覺延展 -->
    <section class="article-section">
      <p class="section-label">視覺延展</p>
      <div class="pink-image pink-image--full">
        <img :src="pinkImg2" alt="各社群視覺 Banner" />
      </div>
      <p class="pink-caption">各社群視覺 Banner</p>
    </section>

    <!-- 獎牌設計 -->
    <section class="article-section">
      <p class="section-label">獎牌設計</p>
      <div class="pink-image pink-image--full">
        <img :src="pinkImg3" alt="裙襬澎澎 RUN 獎牌設計" />
      </div>
    </section>

    <!-- 活動視覺延伸 -->
    <section class="article-section">
      <p class="section-label">打卡點空間策展</p>
      <div class="pink-image pink-image--duo">
        <img :src="pinkImg41" alt="活動視覺延伸 01" />
        <img :src="pinkImg42" alt="活動視覺延伸 02" />
      </div>
    </section>

  </article>

  <!-- 現場佈置 — full-bleed marquee (outside container) -->
  <section class="pink-marquee-section" @mouseenter="isPaused = true" @mouseleave="isPaused = false">
    <div class="pink-marquee__overflow" aria-label="現場佈置相片" role="region">
      <div class="pink-marquee__track" :class="{ 'pink-marquee__track--paused': isPaused }">
        <div
          v-for="(img, i) in marqueeImages"
          :key="i"
          class="pink-marquee__item"
        >
          <img :src="img" :alt="i < pinkCarouselImages.length ? `現場佈置 0${(i % pinkCarouselImages.length) + 1}` : ''" class="pink-marquee__photo" draggable="false" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Project } from '@/types'
import { pinkImg1, pinkImg2, pinkImg3, pinkImg41, pinkImg42, pinkCarouselImages } from '@/data/pink-images'

defineProps<{ project: Project }>()

const isPaused = ref(false)
const marqueeImages = computed(() => [...pinkCarouselImages, ...pinkCarouselImages])
</script>

<style scoped>
.project-detail__article {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5xl);
}

.article-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
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

/* ─── Image layouts ──────────────────────────────────── */
.pink-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-m);
}

.pink-image--full {
  width: 100%;
}

.pink-image--duo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-s);
}

/* ─── Caption ────────────────────────────────────────── */
.pink-caption {
  font-family: var(--font-sans-zh);
  font-size: 0.8125rem;
  color: var(--neutral-500);
  margin: 0;
  line-height: 1.5;
}

/* ─── Marquee (full-bleed) ───────────────────────────── */
.pink-marquee-section {
  --slide-h: clamp(200px, 26vw, 340px);
  --slide-gap: var(--spacing-s);
  --marquee-duration: 32s;

  margin-top: var(--spacing-5xl);
}

.pink-marquee__overflow {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
}

.pink-marquee__track {
  display: flex;
  gap: var(--slide-gap);
  width: max-content;
  animation: pink-marquee var(--marquee-duration) linear infinite;
}

.pink-marquee__track--paused {
  animation-play-state: paused;
}

@keyframes pink-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.pink-marquee__item {
  flex-shrink: 0;
  height: var(--slide-h);
  border-radius: var(--radius-l);
  overflow: hidden;
  background: var(--neutral-100);
}

.pink-marquee__photo {
  height: 100%;
  width: auto;
  display: block;
  object-fit: fill;
  user-select: none;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .pink-marquee__track {
    animation-play-state: paused;
  }
}

@media (max-width: 640px) {
  .pink-image--duo {
    grid-template-columns: 1fr;
  }
}
</style>
