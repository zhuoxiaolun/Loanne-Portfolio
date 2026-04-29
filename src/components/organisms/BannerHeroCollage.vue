<template>
  <div class="banner-collage" aria-hidden="true">
    <div class="banner-collage__inner">
      <div
        v-for="(src, i) in heroCollageImages"
        :key="i"
        class="banner-collage__card"
      >
        <img :src="src" loading="lazy" alt="" />
      </div>
    </div>
    <div class="banner-collage__fade" />
  </div>
</template>

<script setup lang="ts">
import { heroCollageImages } from '@/data/banner-images'
</script>

<style scoped>
.banner-collage {
  position: relative;
  width: 100%;
  height: 569px; /* 設計稿尺寸 */
  background: var(--neutral-50);
  overflow: hidden;
}

/*
 * 3 排圖片確保在 569px + 旋轉後四個角都有覆蓋。
 * 自然高度: 3 × 193px + 2 × 14px gap = 607px
 * 旋轉 -12deg 後寬高互補，覆蓋範圍充足。
 */
.banner-collage__inner {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  grid-template-rows: repeat(3, 193px);
  grid-auto-flow: column;
  grid-auto-columns: 343px;
  gap: 14px;
  transform: translate(-50%, -50%) rotate(-12deg);
  transform-origin: center center;
  /* 讓 grid 往兩側延伸超出 container，補足旋轉後的缺角 */
  margin-left: -25%;
  width: 150%;
}

.banner-collage__card {
  overflow: hidden;
  box-shadow: 15px 9px 18px rgba(0, 0, 0, 0.22);
}

.banner-collage__card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.banner-collage__fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55%;
  background: linear-gradient(to bottom, transparent, #ffffff);
  pointer-events: none;
}

@media (max-width: 768px) {
  .banner-collage {
    height: 360px;
  }

  .banner-collage__inner {
    grid-auto-columns: 220px;
    grid-template-rows: repeat(3, 130px);
    gap: 10px;
    width: 180%;
    margin-left: -40%;
  }
}

@media (max-width: 480px) {
  .banner-collage {
    height: 280px;
  }
}
</style>
