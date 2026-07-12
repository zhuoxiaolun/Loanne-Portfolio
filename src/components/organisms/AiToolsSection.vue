<template>
  <section class="ai-tools">
    <div class="container">
      <h2 class="ai-tools__heading">Tools by AI</h2>
      <div class="ai-tools__grid">
        <div
          v-for="card in aiTools"
          :key="card.key"
          class="ai-tools__card"
        >
          <div class="ai-tools__img-wrap">
            <img :src="aiImages[card.key]" :alt="card.title" class="ai-tools__img" />
          </div>
          <div class="ai-tools__body">
            <h3 class="ai-tools__title">{{ card.title }}</h3>
            <div class="ai-tools__chips">
              <span v-for="chip in card.chips" :key="chip" class="ai-tools__chip">{{ chip }}</span>
            </div>
            <p class="ai-tools__desc">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import aboutData from '@/data/about.json'
import { asset } from '@/config/assets'

const aiEfficiencyImg = asset('about-ai-efficiency.png')
const aiIdeationImg   = asset('about-ai-ideation.png')
const aiResearchImg   = asset('about-ai-research.png')

const aiTools = aboutData.aiTools

const aiImages: Record<string, string> = {
  efficiency: aiEfficiencyImg,
  ideation:   aiIdeationImg,
  research:   aiResearchImg,
}
</script>

<style scoped>
.ai-tools {
  padding-top: var(--spacing-4xl);
  padding-bottom: var(--spacing-4xl);
}

.ai-tools__heading {
  font-family: var(--font-serif-en);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.05;
  color: var(--neutral-900);
  margin: 0 0 var(--spacing-2xl);
}

.ai-tools__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-l);
  align-items: stretch;
}

.ai-tools__card {
  background: rgba(229, 229, 229, 0.4);
  border-radius: var(--radius-l);
  padding: var(--spacing-l);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  height: 100%;
  box-sizing: border-box;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.ai-tools__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.ai-tools__img-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
}

.ai-tools__img {
  width: auto;
  height: 100%;
  max-height: 180px;
  object-fit: contain;
  display: block;
}

.ai-tools__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
}

.ai-tools__title {
  font-family: var(--font-sans-zh);
  font-weight: 800;
  font-size: clamp(1.375rem, 2vw, 1.75rem);
  line-height: 1.2;
  color: var(--neutral-900);
  margin: 0;
}

.ai-tools__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.ai-tools__chip {
  background: var(--neutral-0);
  color: var(--neutral-700);
  font-family: var(--font-sans-zh);
  font-size: 0.8125rem;
  font-weight: 400;
  border-radius: var(--radius-round);
  padding: var(--spacing-xxs) var(--spacing-s);
  white-space: nowrap;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.ai-tools__desc {
  font-family: var(--font-sans-zh);
  font-size: 0.9375rem;
  line-height: 1.8;
  color: var(--neutral-700);
  margin: 0;
}

@media (max-width: 900px) {
  .ai-tools__grid {
    grid-template-columns: 1fr;
  }
}
</style>
