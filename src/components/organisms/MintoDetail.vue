<template>
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

    <!-- 資訊架構 (m-05-01) -->
    <div class="minto-image minto-image--full">
      <img :src="mintoImg1" alt="資訊架構" />
    </div>

    <!-- 設計流程：label + image 在同一個 section -->
    <section class="article-section">
      <p class="section-label">設計流程</p>
      <div class="minto-image minto-image--full">
        <img :src="mintoImg2" alt="設計流程" />
      </div>
    </section>

    <!-- 設計決策：label 緊貼各決策內容 -->
    <div class="minto-section">
      <p class="section-label">設計決策</p>
      <div class="minto-section__items">

        <!-- 決策 1 -->
        <ContentBlock
          v-if="project.detail.contentBlocks[0]"
          :block="project.detail.contentBlocks[0]"
        />

        <!-- 決策 2 + Token 架構圖 -->
        <div class="minto-decision">
          <ContentBlock
            v-if="project.detail.contentBlocks[1]"
            :block="project.detail.contentBlocks[1]"
          />
          <div class="minto-image minto-image--full">
            <img :src="mintoImg3" alt="三層色彩 Token 架構" />
          </div>
        </div>

        <!-- 決策 3 + Happy Path 流程圖 -->
        <div class="minto-decision">
          <ContentBlock
            v-if="project.detail.contentBlocks[2]"
            :block="project.detail.contentBlocks[2]"
          />
          <div class="minto-image minto-image--full">
            <img :src="mintoImg4" alt="Happy Path 收藏片單流程" />
          </div>
          <div class="minto-image minto-image--full">
            <img :src="mintoImg5" alt="Happy Path 搜尋流程" />
          </div>
        </div>

      </div>
    </div>

    <!-- 成果展示：label 緊貼各成果 -->
    <div class="minto-section">
      <p class="section-label">成果展示</p>
      <div class="minto-section__items">

        <!-- 影片詳情頁 -->
        <div class="minto-result">
          <ContentBlock
            v-if="project.detail.contentBlocks[3]"
            :block="project.detail.contentBlocks[3]"
          />
          <div class="minto-video-wrap">
            <video autoplay loop muted playsinline>
              <source :src="mintoVideo1" type="video/mp4" />
            </video>
          </div>
        </div>

        <!-- 我的收藏片單 -->
        <div class="minto-result">
          <ContentBlock
            v-if="project.detail.contentBlocks[4]"
            :block="project.detail.contentBlocks[4]"
          />
          <div class="minto-video-wrap">
            <video autoplay loop muted playsinline>
              <source :src="mintoVideo2" type="video/mp4" />
            </video>
          </div>
        </div>

        <!-- 搜尋頁 -->
        <div class="minto-result">
          <ContentBlock
            v-if="project.detail.contentBlocks[5]"
            :block="project.detail.contentBlocks[5]"
          />
          <div class="minto-video-wrap">
            <video autoplay loop muted playsinline>
              <source :src="mintoVideo3" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </div>

    <!-- 設計系統：label + image 在同一個 section -->
    <section class="article-section">
      <p class="section-label">設計系統</p>
      <div class="minto-image minto-image--full">
        <img :src="mintoImg6" alt="設計系統" />
      </div>
    </section>

    <!-- 團隊影響力 -->
    <ContentBlock
      v-if="project.detail.contentBlocks[6]"
      :block="project.detail.contentBlocks[6]"
      class="article-section"
    />

  </article>
</template>

<script setup lang="ts">
import ContentBlock from '@/components/molecules/ContentBlock.vue'
import {
  mintoImg1, mintoImg2, mintoImg3, mintoImg4, mintoImg5, mintoImg6,
  mintoVideo1, mintoVideo2, mintoVideo3,
} from '@/data/minto-images'
import type { Project } from '@/types'

defineProps<{ project: Project }>()

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
.project-detail__article {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5xl);
}

/* 基本 section：label + subtitle + body 緊密排列 */
.article-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

/* 大 section 群組：label 緊貼下方內容 */
.minto-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

/* section 內各 item 之間維持大間距 */
.minto-section__items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5xl);
}

/* 單一決策：text 和圖之間留適當距離 */
.minto-decision {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

/* 單一成果：text 和影片之間留適當距離 */
.minto-result {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

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
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.minto-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-m);
}

.minto-image--full {
  width: 100%;
}

.minto-video-wrap {
  display: flex;
  justify-content: center;
}

.minto-video-wrap video {
  width: 100%;
  max-width: 400px;
  height: auto;
  display: block;
  border-radius: var(--radius-m);
}
</style>
