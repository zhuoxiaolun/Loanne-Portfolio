<template>
  <article class="project-detail__article">

    <!-- Overview -->
    <section v-if="project.detail.overview" class="article-section">
      <p class="section-label">專案概述</p>
      <p class="section-body">{{ project.detail.overview }}</p>
    </section>

    <!-- z-01-01 -->
    <div class="zero-image zero-image--full">
      <img :src="zeroImg1" alt="" />
    </div>

    <!-- Background -->
    <section v-if="project.detail.background" class="article-section">
      <p class="section-label">專案背景</p>
      <p class="section-body">{{ project.detail.background }}</p>
    </section>

    <!-- Strategy: heading + point 0 (品牌風格融合) -->
    <section v-if="strategyBlock" class="article-section">
      <p class="section-label">{{ strategyBlock.heading }}</p>
      <div class="strategy-point">
        <strong class="strategy-title">{{ strategyBlock.points[0].title }}</strong>
        <p class="section-body">{{ strategyBlock.points[0].body }}</p>
      </div>
    </section>

    <!-- z-01-02 -->
    <div class="zero-image zero-image--full">
      <img :src="zeroImg2" alt="" />
    </div>

    <!-- Strategy: point 1 (視覺動線與節奏) -->
    <section v-if="strategyBlock?.points[1]" class="article-section">
      <div class="strategy-point">
        <strong class="strategy-title">{{ strategyBlock.points[1].title }}</strong>
        <p class="section-body">{{ strategyBlock.points[1].body }}</p>
      </div>
    </section>

    <!-- z-01-04 -->
    <div class="zero-image zero-image--full">
      <video autoplay loop muted playsinline>
        <source :src="zeroImg4" type="video/mp4" />
      </video>
    </div>

    <!-- 執行亮點 -->
    <ContentBlock
      v-if="project.detail.contentBlocks[1]"
      :block="project.detail.contentBlocks[1]"
      class="article-section"
    />

    <!-- z-01-03 -->
    <div class="zero-image zero-image--full">
      <img :src="zeroImg3" alt="" />
    </div>

    <!-- z-01-05 -->
    <div class="zero-image zero-image--full">
      <img :src="zeroImg5" alt="" />
    </div>

  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ContentBlock from '@/components/molecules/ContentBlock.vue'
import { zeroImg1, zeroImg2, zeroImg3, zeroImg4, zeroImg5 } from '@/data/zero-images'
import type { Project } from '@/types'

const props = defineProps<{ project: Project }>()

const strategyBlock = computed(() => {
  const block = props.project.detail.contentBlocks[0]
  return block?.type === 'strategy' ? block : null
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

.strategy-point {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
}

.strategy-title {
  font-family: var(--font-sans-zh);
  font-size: clamp(1.0625rem, 1.5vw, 1.25rem);
  font-weight: 700;
  color: var(--neutral-900);
  line-height: 1.3;
}

.zero-image img,
.zero-image video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-m);
}

.zero-image--full {
  width: 100%;
}
</style>
