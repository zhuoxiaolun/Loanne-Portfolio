<template>
  <article class="project-detail__article">

    <!-- Overview -->
    <section v-if="project.detail.overview" class="article-section">
      <p class="section-label">專案概述</p>
      <p class="section-body">{{ project.detail.overview }}</p>
    </section>

    <!-- zero-1 -->
    <div class="zero-image zero-image--full">
      <img :src="zeroImg1" alt="" />
    </div>

    <!-- Background -->
    <section v-if="project.detail.background" class="article-section">
      <p class="section-label">專案背景</p>
      <p class="section-body">{{ project.detail.background }}</p>
    </section>

    <!-- Strategy block -->
    <ContentBlock
      v-if="project.detail.contentBlocks[0]"
      :block="project.detail.contentBlocks[0]"
      class="article-section"
    />

    <!-- zero-2 -->
    <div class="zero-image zero-image--full">
      <img :src="zeroImg2" alt="" />
    </div>

    <!-- 執行亮點 -->
    <ContentBlock
      v-if="project.detail.contentBlocks[1]"
      :block="project.detail.contentBlocks[1]"
      class="article-section"
    />

    <!-- zero-3 -->
    <div class="zero-image zero-image--full">
      <img :src="zeroImg3" alt="" />
    </div>

  </article>
</template>

<script setup lang="ts">
import ContentBlock from '@/components/molecules/ContentBlock.vue'
import { zeroImg1, zeroImg2, zeroImg3 } from '@/data/zero-images'
import type { Project } from '@/types'

defineProps<{ project: Project }>()
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
  gap: var(--spacing-m);
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

.zero-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-m);
}

.zero-image--full {
  width: 100%;
}
</style>
