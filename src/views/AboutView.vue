<template>
  <main class="about">

    <!-- ── Hero ─────────────────────────────── -->
    <section class="about-hero">
      <div class="container about-hero__inner">
        <div class="about-hero__content">
          <h1 class="about-hero__title">About</h1>
          <p class="about-hero__bio">{{ about.hero.bio }}</p>
          <p class="about-hero__bio-extra">{{ about.hero.bioExtra }}</p>
        </div>
        <div class="about-hero__visual" aria-hidden="true">
          <img :src="heroCollageImg" alt="" class="about-hero__img" />
        </div>
      </div>
    </section>

    <div class="container about-body">

      <!-- ── Hard & Soft Skills ───────────── -->
      <section class="about-section">
        <h2 class="about-section__heading">Hard &amp; Soft Skills</h2>
        <div class="about-skills__grid">
          <!-- Hard Skills -->
          <div class="about-tools__card">
            <img :src="hardSkillIconsImg" alt="Hard skill tools" class="about-tools__icons-img" />
            <p class="about-tools__desc">{{ about.hardSkills.desc }}</p>
          </div>

          <!-- Soft Skills -->
          <div class="about-tools__card about-soft__card">
            <div class="about-soft__chips">
              <span
                v-for="tag in about.softSkills"
                :key="tag"
                class="about-soft__chip"
              >{{ tag }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Tools by AI ───────────────────── -->
      <section class="about-section">
        <h2 class="about-section__heading">Tools by AI</h2>
        <div class="about-ai__grid">
          <div
            v-for="card in about.aiTools"
            :key="card.key"
            class="about-ai__card"
          >
            <div class="about-ai__img-wrap">
              <img :src="aiImages[card.key]" :alt="card.title" class="about-ai__img" />
            </div>
            <div class="about-ai__body">
              <h3 class="about-ai__title">{{ card.title }}</h3>
              <div class="about-ai__chips">
                <span v-for="chip in card.chips" :key="chip" class="about-ai__chip">{{ chip }}</span>
              </div>
              <p class="about-ai__desc">{{ card.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Experience ─────────────────────── -->
      <section class="about-section">
        <h2 class="about-section__heading">Experience</h2>
        <div class="about-exp__list">
          <div
            v-for="(item, i) in about.experience.items"
            :key="i"
            class="about-exp__item"
          >
            <div class="about-exp__logo">
              <img :src="expLogos[item.logoKey]" :alt="item.displayTitle" class="about-exp__logo-img" />
            </div>
            <div class="about-exp__body">
              <p class="about-exp__role">{{ item.displayTitle }}</p>
              <p class="about-exp__period">{{ item.period }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Awards ─────────────────────────── -->
      <section class="about-section">
        <h2 class="about-section__heading">Awards</h2>
        <div class="about-awards__list">
          <div
            v-for="(award, i) in about.awards.items"
            :key="i"
            class="about-awards__item"
          >
            <p class="about-awards__title">{{ award.title }}</p>
            <span class="about-awards__year">{{ award.year }}</span>
          </div>
        </div>
      </section>

    </div><!-- /container -->

    <!-- ── Photo Marquee ── (full-bleed continuous scroll) -->
    <section class="about-gallery" @mouseenter="pauseCarousel" @mouseleave="resumeCarousel">
      <div class="about-gallery__overflow" aria-label="Photo gallery" role="region">
        <div class="about-gallery__track" :class="{ 'about-gallery__track--paused': isPaused }">
          <div
            v-for="(photo, i) in marqueeGallery"
            :key="i"
            class="about-gallery__item"
            aria-hidden="i >= gallery.length"
          >
            <img :src="photo.src" :alt="i < gallery.length ? `Photo ${i + 1}` : ''" class="about-gallery__photo" draggable="false" />
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import aboutData from '@/data/about.json'

import heroCollageImg   from '@/assets/about-hero.png'
import hardSkillIconsImg from '@/assets/about-skills.png'
import aiEfficiencyImg  from '@/assets/about-ai-efficiency.png'
import aiIdeationImg    from '@/assets/about-ai-ideation.png'
import aiResearchImg    from '@/assets/about-ai-research.png'
import expLogoMarieClaire from '@/assets/about-exp-01.png'
import expLogoIris        from '@/assets/about-exp-02.png'
import expLogoMounts      from '@/assets/about-exp-03.png'
import expLogoYuntech     from '@/assets/about-exp-04.png'

import galleryImg1 from '@/assets/about-01.png'
import galleryImg2 from '@/assets/about-02.png'
import galleryImg3 from '@/assets/about-03.png'
import galleryImg4 from '@/assets/about-04.png'
import galleryImg5 from '@/assets/about-05.png'

const about = aboutData


const aiImages: Record<string, string> = {
  efficiency: aiEfficiencyImg,
  ideation:   aiIdeationImg,
  research:   aiResearchImg,
}

const expLogos: Record<string, string> = {
  media:  expLogoMarieClaire,
  lab:    expLogoIris,
  agency: expLogoMounts,
  school: expLogoYuntech,
}

// ── Photo Marquee ────────────────────────────────────────────
const gallery = [
  { src: galleryImg1 },
  { src: galleryImg2 },
  { src: galleryImg3 },
  { src: galleryImg4 },
  { src: galleryImg5 },
]

// Duplicate for seamless loop: animate from translateX(0) → translateX(-50%)
const marqueeGallery = [...gallery, ...gallery]

const isPaused = ref(false)

function pauseCarousel() { isPaused.value = true }
function resumeCarousel() { isPaused.value = false }
</script>

<style scoped>

/* ── Page ─────────────────────────────────────── */
.about {
  padding-bottom: var(--spacing-6xl);
}

/* ── Hero ─────────────────────────────────────── */
.about-hero {
  padding-top: calc(72px + var(--spacing-3xl));
  padding-bottom: var(--spacing-4xl);
}

.about-hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  align-items: start;
}

.about-hero__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

/* "About" — big editorial display */
.about-hero__title {
  font-family: var(--font-serif-en);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(4rem, 8vw, 6.5rem);
  line-height: 1.0;
  color: var(--neutral-900);
  margin: 0;
}

.about-hero__bio {
  font-family: var(--font-sans-zh);
  font-weight: 400;
  font-size: clamp(0.875rem, 1.2vw, 1.125rem);
  line-height: 1.85;
  color: var(--neutral-800);
  margin: 0;
}

.about-hero__bio-extra {
  font-family: var(--font-sans-zh);
  font-weight: 300;
  font-size: clamp(0.8125rem, 1vw, 0.9375rem);
  line-height: 1.8;
  color: var(--neutral-500);
  margin: 0;
}

.about-hero__visual {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.about-hero__img {
  width: 100%;
  max-width: 480px;
  height: auto;
  display: block;
  object-fit: contain;
}

/* ── Body container ───────────────────────────── */
.about-body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6xl);
}

/* ── Section ──────────────────────────────────── */
.about-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

/* Large italic serif heading — matches Figma's 64px scale */
.about-section__heading {
  font-family: var(--font-serif-en);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.05;
  color: var(--neutral-900);
  margin: 0;
}

/* ── Hard & Soft Skills ───────────────────────── */
.about-skills__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-l);
  align-items: stretch;
}

.about-tools__card {
  background: var(--neutral-50);
  border-radius: var(--radius-l);
  padding: var(--spacing-xl) var(--spacing-xl) var(--spacing-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.about-tools__icons-img {
  width: 100%;
  max-width: 480px;
  height: auto;
  display: block;
  object-fit: contain;
}

.about-tools__desc {
  font-family: var(--font-sans-zh);
  font-size: 0.9375rem;
  line-height: 1.85;
  color: var(--neutral-600);
  margin: 0;
}

/* Soft Skills card — editorial grid list */
.about-soft__card {
  justify-content: center;
  align-items: stretch;
  padding: 0;          /* remove card padding so dividers touch edges */
  overflow: hidden;    /* clip to card border-radius */
}

.about-soft__chips {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
  align-content: center;
}

.about-soft__chip {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 22px 28px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  font-family: var(--font-sans-zh);
  font-size: 1rem;
  font-weight: 500;
  color: var(--neutral-900);
  cursor: default;
  transition: background 180ms ease;
  white-space: nowrap;
}

/* Remove bottom border from last row (items 5 & 6) */
.about-soft__chip:nth-last-child(-n+2) {
  border-bottom: none;
}

/* Vertical divider between columns */
.about-soft__chip:nth-child(even) {
  border-left: 1px solid rgba(0, 0, 0, 0.07);
}

.about-soft__chip::before {
  content: '#';
  color: #9d5a6a;
  font-family: var(--font-serif-en);
  font-style: italic;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1;
  flex-shrink: 0;
  transition: transform 180ms ease;
}

.about-soft__chip:hover {
  background: rgba(157, 90, 106, 0.04);
}

.about-soft__chip:hover::before {
  transform: translateX(-3px);
}

/* ── AI Tools ─────────────────────────────────── */
.about-ai__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-l);
  align-items: stretch;
}

.about-ai__card {
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

.about-ai__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.about-ai__img-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
}

.about-ai__img {
  width: auto;
  height: 100%;
  max-height: 180px;
  object-fit: contain;
  display: block;
}

.about-ai__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
}

/* "AI Efficiency" — Noto Serif TC Black feel, large */
.about-ai__title {
  font-family: var(--font-sans-zh);
  font-weight: 800;
  font-size: clamp(1.375rem, 2vw, 1.75rem);
  line-height: 1.2;
  color: var(--neutral-900);
  margin: 0;
}

.about-ai__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

/* White pill badges — matching Figma */
.about-ai__chip {
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

.about-ai__desc {
  font-family: var(--font-sans-zh);
  font-size: 0.9375rem;
  line-height: 1.8;
  color: var(--neutral-700);
  margin: 0;
}

/* ── Experience ───────────────────────────────── */
.about-exp__list {
  display: flex;
  flex-direction: column;
}

.about-exp__item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-l);
  padding: var(--spacing-l) 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.about-exp__item:last-child {
  border-bottom: none;
}

.about-exp__logo {
  flex-shrink: 0;
  width: 54px;
  height: 54px;
  border-radius: var(--radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-exp__logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.about-exp__body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.about-exp__role {
  font-family: var(--font-sans-zh);
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--neutral-900);
  margin: 0;
  line-height: 1.4;
}

.about-exp__company {
  font-family: var(--font-sans-zh);
  font-weight: 400;
  font-size: 0.9375rem;
  color: var(--neutral-600);
  margin: 0;
  line-height: 1.5;
}

.about-exp__period {
  font-family: var(--font-sans-zh);
  font-size: 0.875rem;
  color: var(--neutral-400);
  margin: 0;
  margin-top: var(--spacing-xxs);
}

/* ── Awards ───────────────────────────────────── */
.about-awards__list {
  display: flex;
  flex-direction: column;
}

.about-awards__item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--spacing-l) 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.about-awards__item:last-child {
  border-bottom: none;
}

.about-awards__title {
  font-family: var(--font-sans-zh);
  font-weight: 700;
  font-size: 1rem;
  color: var(--neutral-900);
  margin: 0;
  line-height: 1.5;
}

.about-awards__year {
  font-family: var(--font-sans-zh);
  font-size: 0.875rem;
  color: var(--neutral-500);
  margin: 0;
}

/* ── Photo Marquee (full-bleed continuous) ──────────────── */
.about-gallery {
  --slide-h: clamp(200px, 26vw, 340px);
  --slide-gap: 12px;
  /* speed: total duration for one full loop pass */
  --marquee-duration: 32s;

  margin-top: var(--spacing-6xl);
}

.about-gallery__overflow {
  width: 100%;
  overflow: hidden;
  /* fade edges for depth */
  mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
}

.about-gallery__track {
  display: flex;
  gap: var(--slide-gap);
  width: max-content;
  animation: photo-marquee var(--marquee-duration) linear infinite;
}

.about-gallery__track--paused {
  animation-play-state: paused;
}

/* Seamless: 10 items (5 + 5 clone), animate exactly -50% = one full set */
@keyframes photo-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.about-gallery__item {
  flex-shrink: 0;
  height: var(--slide-h);
  border-radius: var(--radius-l);
  overflow: hidden;
  background: var(--neutral-100);
}

/* Width is intrinsic — portrait images are narrow, landscape are wide */
.about-gallery__photo {
  height: 100%;
  width: auto;
  display: block;
  object-fit: fill;
  user-select: none;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .about-gallery__track {
    animation-play-state: paused;
  }
}

/* ── Responsive ───────────────────────────────── */
@media (max-width: 900px) {
  .about-hero__inner {
    grid-template-columns: 1fr;
  }

  .about-hero__visual {
    display: flex;
    justify-content: center;
    order: -1;
  }

  .about-hero__img {
    max-width: 320px;
  }

  .about-skills__grid,
  .about-ai__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .about-awards__item {
    gap: 2px;
  }
}
</style>
