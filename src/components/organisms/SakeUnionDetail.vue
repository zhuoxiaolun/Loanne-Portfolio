<template>
  <article class="project-detail__article">

    <!-- Overview -->
    <section v-if="project.detail.overview" class="article-section">
      <p class="section-label">專案概述</p>
      <p class="section-body">{{ project.detail.overview }}</p>
    </section>

    <!-- sake-5 -->
    <div class="sake-image sake-image--full">
      <img :src="sakeImg5" alt="" />
    </div>

    <!-- Background -->
    <section v-if="project.detail.background" class="article-section">
      <p class="section-label">專案背景</p>
      <p class="section-body">{{ project.detail.background }}</p>
    </section>

    <!-- sake-7 -->
    <div class="sake-image sake-image--full">
      <video autoplay loop muted playsinline>
        <source :src="sakeImg7" type="video/mp4" />
      </video>
    </div>

    <!-- Strategy block -->
    <ContentBlock
      v-if="project.detail.contentBlocks[0]"
      :block="project.detail.contentBlocks[0]"
      class="article-section"
    />

    <!-- Horizontal pair: sake-2-1 + sake-2-2 -->
    <div class="sake-image sake-image--row">
      <video
        v-for="(src, i) in sakeHorizontalPair"
        :key="i"
        autoplay loop muted playsinline
      >
        <source :src="src" type="video/mp4" />
      </video>
    </div>

    <!-- 執行亮點：第一段 -->
    <section v-if="highlightParagraphs[0]" class="article-section">
      <p class="section-label">執行亮點</p>
      <p class="section-body">{{ highlightParagraphs[0] }}</p>
    </section>

    <!-- Horizontal pair: sake-3-1 + sake-3-2 -->
    <div class="sake-image sake-image--row">
      <img v-for="(src, i) in sakeVerticalPair" :key="i" :src="src" alt="" />
    </div>

    <!-- 執行亮點：第二段 -->
    <section v-if="highlightParagraphs[1]" class="article-section">
      <p class="section-body">{{ highlightParagraphs[1] }}</p>
    </section>

    <!-- Single full-width: sake-4 -->
    <div class="sake-image sake-image--full">
      <img :src="sakeImg4" alt="" />
    </div>

    <p class="section-body">透過標準化的 Component 與交付規範，讓前端工程師能準確理解每個元件的邏輯與規格，實現高效的跨團隊實作協作</p>

    <!-- sake-8 -->
    <div class="sake-image sake-image--full">
      <img :src="sakeImg8" alt="" />
    </div>

  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ContentBlock from '@/components/molecules/ContentBlock.vue'
import {
  sakeHorizontalPair,
  sakeVerticalPair,
  sakeImg4,
  sakeImg5,
  sakeImg7,
  sakeImg8,
} from '@/data/sake-images'
import type { Project } from '@/types'

const props = defineProps<{ project: Project }>()

const highlightParagraphs = computed(() => {
  const block = props.project.detail.contentBlocks[1]
  const body = block?.type === 'text' ? block.body : ''
  return body.split('\n\n').map(p => p.trim()).filter(Boolean)
})
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

.section-label {
  font-family: var(--font-sans-zh);
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--neutral-600);
  margin: 0;
  line-height: 1.5;
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
.sake-image img,
.sake-image video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-m);
}

.sake-image--full {
  width: 100%;
}

/* Horizontal: two images side by side */
.sake-image--row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-s);
}


/* Vertical: two images stacked */
.sake-image--stack {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
}

@media (max-width: 640px) {
  .sake-image--row {
    grid-template-columns: 1fr;
  }
}
</style>
