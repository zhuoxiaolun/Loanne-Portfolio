<template>
  <div class="banner-article">
  <!-- Shopping 頻道 section -->
  <div class="banner-section">
    <p class="banner-section__label">專案概述</p>
    <h2 class="banner-section__title">Shopping 頻道</h2>
    <p class="banner-section__body">
      「美麗佳人 Shopping 頻道」是以策展為核心的風格導覽平台，深度整合時尚趨勢、居家品味與永續生活，致力於將購物昇華為充滿儀式感的生活探索。平台每月因應不同主題進行深度策展，我負責為每期專題打造專屬 Banner，在傳遞資訊的同時，也構築出品牌充滿溫度且知性的視覺形象。
    </p>
    <div class="banner-grid">
      <img
        v-for="(src, i) in shoppingImages"
        :key="i"
        :src="src"
        loading="lazy"
        alt=""
        class="banner-grid__img"
      />
    </div>
  </div>

  <!-- 風格學院 section -->
  <div class="banner-section">
    <p class="banner-section__label">專案概述</p>
    <h2 class="banner-section__title">風格學院</h2>
    <p class="banner-section__body">
      「美麗佳人風格學院」是以生活美學與心靈成長為核心的學習平台，傳遞 "Think Smart, Look Amazing" 的品牌精神。平台定期集結各領域大師，開設涵蓋內在情緒、職人料理與日常藝術的深度課程。在參與設計的過程中，我為每期多元的主題打造專屬 Banner，協助現代人在探索內在修為時，能感受全方位的豐盈生活姿態。
    </p>
    <div class="banner-grid">
      <img
        v-for="(src, i) in styleAcademyImages"
        :key="i"
        :src="src"
        loading="lazy"
        alt=""
        class="banner-grid__img"
      />
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { shoppingImages, styleAcademyImages } from '@/data/banner-images'
</script>

<style scoped>
/* ─── Content sections ───────────────────────────────── */
.banner-article {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5xl);
}

.banner-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

/* 與 ContentBlock / ProjectDetailView 相同的文字樣式 */
.banner-section__label {
  font-family: var(--font-sans-zh);
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--neutral-600);
  margin: 0;
  line-height: 1.5;
}

.banner-section__title {
  font-family: var(--font-sans-zh);
  font-size: clamp(1.375rem, 2.5vw, 2rem);
  font-weight: 700;
  color: var(--neutral-900);
  line-height: 1.3;
  margin: 0;
}

.banner-section__body {
  font-family: var(--font-sans-zh);
  font-size: 1rem;
  font-weight: 400;
  color: var(--neutral-700);
  line-height: 1.85;
  margin: 0;
}

/* ─── Image grid ─────────────────────────────────────── */
.banner-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-s);
  width: 100%;
}


.banner-grid__img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  border-radius: 4px;
  transition: transform 300ms ease, box-shadow 300ms ease;
}

.banner-grid__img:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);
}

/* ─── Responsive ─────────────────────────────────────── */
@media (max-width: 960px) {
  .banner-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .banner-grid {
    grid-template-columns: 1fr;
  }
}
</style>
