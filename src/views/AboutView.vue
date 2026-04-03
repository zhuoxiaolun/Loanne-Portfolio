<template>
  <main class="about-page">
    <div class="container about-page__inner">

      <!-- About Hero -->
      <section class="about-hero">
        <h1 class="about-hero__title">About</h1>
        <p class="about-hero__bio text-body">{{ about.hero.bio }}</p>
        <p class="about-hero__bio-extra text-body">{{ about.hero.bioExtra }}</p>
      </section>

      <!-- Professional Tools -->
      <section class="about-section">
        <h2 class="about-section__heading">Professional Tools</h2>
        <div class="about-tools__cards">
          <div class="about-tools__card">
            <h3 class="about-tools__card-title">設計工具</h3>
            <ul class="about-tools__list">
              <li
                v-for="tool in about.professionalTools.items"
                :key="tool.name"
                class="about-tools__item text-body"
              >{{ tool.name }}</li>
            </ul>
          </div>
          <div class="about-tools__card">
            <h3 class="about-tools__card-title">協作 & 原型</h3>
            <ul class="about-tools__list">
              <li class="about-tools__item text-body">Miro</li>
              <li class="about-tools__item text-body">Protopie</li>
              <li class="about-tools__item text-body">Framer</li>
              <li class="about-tools__item text-body">Notion</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Tools by AI -->
      <section class="about-section">
        <h2 class="about-section__heading">Tools by AI</h2>
        <div class="about-ai__cards">
          <div class="about-ai__card">
            <div class="about-ai__icon">⚡</div>
            <h3 class="about-ai__card-title">AI Efficiency</h3>
            <p class="about-ai__card-desc text-small">運用 Claude、ChatGPT 加速設計流程，從研究摘要到文案撰寫全面提升效率。</p>
          </div>
          <div class="about-ai__card">
            <div class="about-ai__icon">💡</div>
            <h3 class="about-ai__card-title">AI Ideation</h3>
            <p class="about-ai__card-desc text-small">透過 Midjourney 進行視覺靈感探索，快速產出概念草圖與風格參考。</p>
          </div>
          <div class="about-ai__card">
            <div class="about-ai__icon">🔍</div>
            <h3 class="about-ai__card-title">AI Research</h3>
            <p class="about-ai__card-desc text-small">結合 AI 工具進行使用者回饋分析與競品研究，提煉設計洞察。</p>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section class="about-section">
        <h2 class="about-section__heading">Experience</h2>
        <div class="about-exp__list">
          <div
            v-for="(item, i) in about.experience.items"
            :key="i"
            class="about-exp__item"
          >
            <div class="about-exp__period text-small">{{ item.period }}</div>
            <div class="about-exp__body">
              <h3 class="about-exp__role text-body">{{ item.role }}</h3>
              <p class="about-exp__company text-small">{{ item.company }}</p>
              <p class="about-exp__desc text-small">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Awards -->
      <section class="about-section">
        <h2 class="about-section__heading">Awards</h2>
        <div class="about-awards__list">
          <div
            v-for="(award, i) in about.awards.items"
            :key="i"
            class="about-awards__item"
          >
            <span class="about-awards__year text-small">{{ award.year }}</span>
            <div class="about-awards__body">
              <h3 class="about-awards__title text-body">{{ award.title }}</h3>
              <p class="text-small" style="color: var(--neutral-600)">{{ award.description }}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  </main>
</template>

<script setup lang="ts">
import aboutData from '@/data/about.json'

const about = aboutData
</script>

<style scoped>
.about-page__inner {
  padding-top: calc(80px + var(--spacing-3xl));
  padding-bottom: var(--spacing-6xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5xl);
}

/* Hero */
.about-hero {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.about-hero__title {
  font-family: var(--font-serif-en);
  font-weight: 600;
  font-style: italic;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--neutral-900);
  line-height: 1.05;
}

.about-hero__bio {
  color: var(--neutral-700);
  max-width: 680px;
}

.about-hero__bio-extra {
  color: var(--neutral-600);
  max-width: 600px;
}

/* Section Heading */
.about-section__heading {
  font-family: var(--font-serif-en);
  font-weight: 600;
  font-style: italic;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  color: var(--neutral-900);
  margin-bottom: var(--spacing-xl);
}

/* Professional Tools Cards */
.about-tools__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-l);
}

.about-tools__card {
  background: var(--rose-100);
  border-radius: var(--radius-l);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.about-tools__card-title {
  font-family: var(--font-sans-zh);
  font-weight: 700;
  font-size: 0.9375rem;
  color: var(--neutral-900);
}

.about-tools__list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
}

.about-tools__item {
  color: var(--neutral-700);
  padding: var(--spacing-xs) 0;
  border-bottom: 1px solid var(--neutral-100);
}

.about-tools__item:last-child {
  border-bottom: none;
}

/* AI Tools Cards */
.about-ai__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-l);
}

.about-ai__card {
  background: var(--neutral-0);
  border: 1px solid var(--neutral-100);
  border-radius: var(--radius-l);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  transition: box-shadow var(--transition-base), border-color var(--transition-base);
}

.about-ai__card:hover {
  box-shadow: var(--shadow-card);
  border-color: var(--neutral-300);
}

.about-ai__icon {
  font-size: 2rem;
  line-height: 1;
}

.about-ai__card-title {
  font-family: var(--font-sans-zh);
  font-weight: 700;
  font-size: 1rem;
  color: var(--neutral-900);
}

.about-ai__card-desc {
  color: var(--neutral-600);
  line-height: 1.7;
}

/* Experience */
.about-exp__list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.about-exp__item {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: var(--spacing-l);
}

.about-exp__period {
  color: var(--neutral-500);
  padding-top: 3px;
  text-align: right;
}

.about-exp__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--neutral-50);
}

.about-exp__item:last-child .about-exp__body {
  border-bottom: none;
}

.about-exp__role {
  font-weight: 700;
  color: var(--neutral-900);
}

.about-exp__company {
  color: var(--cherry-600);
  font-weight: 700;
}

.about-exp__desc {
  color: var(--neutral-600);
  margin-top: var(--spacing-xxs);
}

/* Awards */
.about-awards__list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.about-awards__item {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-l);
}

.about-awards__year {
  background: var(--cherry-100);
  color: var(--cherry-700);
  padding: var(--spacing-tiny) var(--spacing-xs);
  border-radius: var(--radius-xxs);
  font-weight: 700;
  flex-shrink: 0;
  white-space: nowrap;
}

.about-awards__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxs);
}

.about-awards__title {
  font-weight: 700;
  color: var(--neutral-900);
}

@media (max-width: 768px) {
  .about-tools__cards {
    grid-template-columns: 1fr;
  }
  .about-ai__cards {
    grid-template-columns: 1fr;
  }
  .about-exp__item {
    grid-template-columns: 1fr;
  }
  .about-exp__period {
    text-align: left;
  }
}
</style>
