<template>
  <section class="hero">
    <div class="container">
      <div class="hero__card">
        <div class="hero__card-overlay" aria-hidden="true"></div>

        <div class="hero__content">
          <h1 class="hero__headline">
            <span>Hey, it's {{ data.name }},</span>
            <span>{{ data.titleLine2 }}</span>
          </h1>
          <div class="hero__body">
            <p v-for="(paragraph, i) in data.body" :key="i">{{ paragraph }}</p>
          </div>
          <AppButton :to="data.ctaLearnMore.to" variant="secondary" class="hero__cta">
            {{ data.ctaLearnMore.label }}
          </AppButton>
        </div>

        <div class="hero__visual" aria-hidden="true">
          <img :src="avatarImg" alt="" class="hero__avatar" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/atoms/AppButton.vue'
import avatarImg from '@/assets/adbb7930de62ba6d651de79e802daceec5629fad.png'

defineProps<{
  data: {
    name: string
    titleLine2: string
    body: string[]
    ctaLearnMore: { label: string; to: string }
  }
}>()
</script>

<style scoped>
.hero {
  position: relative;
  padding-top: calc(72px + var(--spacing-xl));
  padding-bottom: var(--spacing-6xl);
  overflow: hidden;
}

/* Main hero card */
.hero__card {
  position: relative;
  border-radius: 32px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  min-height: 480px;
  background: linear-gradient(
    135deg,
    #ccd9ef 0%,
    #eaf0f9 15%,
    #ffffff 30%,
    #faefef 50%,
    #ffffff 68%,
    #dce8f4 85%,
    #ccd9ef 100%
  );
  background-size: 280% 280%;
  animation: heroFlow 12s ease-in-out infinite;
  display: flex;
  align-items: center;
}

/* Grain texture */
.hero__card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 10;
  opacity: 0.06;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 180px;
}

/* Glass edge overlay */
.hero__card-overlay {
  position: absolute;
  inset: 0;
  box-shadow: inset -1px 0 6px rgba(255, 255, 255, 0.7), inset 0 0 2px rgba(255, 255, 255, 0.7);
  border-radius: inherit;
  pointer-events: none;
}

/* Left text content */
.hero__content {
  position: relative;
  z-index: 11;
  padding: var(--spacing-4xl) var(--spacing-4xl) var(--spacing-4xl) var(--spacing-5xl);
  max-width: 62%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.hero__cta {
  align-self: flex-start;
}

/* "Hey, it's Loanne, / a UI/UX Designer." */
.hero__headline {
  font-family: var(--font-serif-en);
  font-weight: 600;
  font-style: normal;
  font-size: clamp(2.25rem, 4.5vw, 4rem);
  line-height: 1.15;
  color: #000000;
  margin: 0;
  display: flex;
  flex-direction: column;
}

/* Body paragraphs */
.hero__body {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.hero__body p {
  font-family: var(--font-sans-zh);
  font-weight: 400;
  font-size: clamp(0.875rem, 1.1vw, 1.125rem);
  color: #000000;
  line-height: 1.75;
  letter-spacing: 0.4px;
  margin: 0;
}


/* Right — emoji avatar */
.hero__visual {
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  width: clamp(220px, 30%, 400px);
  pointer-events: none;
  z-index: 11;
}

.hero__avatar {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  object-position: bottom center;
}

/* ── Mobile ── */
@media (max-width: 768px) {
  .hero__card {
    min-height: unset;
    padding-bottom: var(--spacing-4xl);
  }

  .hero__content {
    max-width: 100%;
    padding: var(--spacing-3xl) var(--spacing-l);
  }

  .hero__visual {
    display: none;
  }
}

@keyframes heroFlow {
  0%   { background-position: 0% 30%; }
  50%  { background-position: 100% 70%; }
  100% { background-position: 0% 30%; }
}
</style>
