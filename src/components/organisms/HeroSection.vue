<template>
  <section class="hero">
    <div class="container">
      <div class="hero__card">
        <div class="hero__card-overlay" aria-hidden="true"></div>

        <div class="hero__content">
          <h1 class="hero__headline">
            <span class="hero__greeting">Hey, it's </span>{{ data.name }}
          </h1>
          <p class="hero__tagline">{{ data.tagline }}</p>
          <div class="hero__ctas">
            <AppButton :to="data.ctaPrimary.to" variant="primary">{{ data.ctaPrimary.label }}</AppButton>
            <AppButton :to="data.ctaSecondary.to" variant="secondary">{{ data.ctaSecondary.label }}</AppButton>
          </div>
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
import avatarImg from '@/assets/03459b8bd87b5c455064a2318070f071889cd7e8.png'

defineProps<{
  data: {
    greeting: string
    name: string
    titleEn: string
    tagline: string
    ctaPrimary: { label: string; to: string }
    ctaSecondary: { label: string; to: string }
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
  min-height: 420px;
  background: var(--neutral-0);
  display: flex;
  align-items: center;
}

/* Subtle pink gradient overlay on the card */
.hero__card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(244, 173, 189, 0.12) 0%, rgba(255, 255, 255, 0.08) 60%);
  box-shadow: inset -1px 0 6px rgba(255, 255, 255, 0.8), inset 0 0 2px rgba(255, 255, 255, 0.8);
  border-radius: inherit;
  pointer-events: none;
}

/* Left text content */
.hero__content {
  position: relative;
  z-index: 1;
  padding: var(--spacing-4xl) var(--spacing-4xl) var(--spacing-4xl) var(--spacing-5xl);
  max-width: 58%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

/* "Hey, it's Loanne" */
.hero__headline {
  font-family: var(--font-serif-en);
  font-weight: 600;
  font-style: normal;
  font-size: clamp(2.25rem, 4.5vw, 4rem);
  line-height: 1.1;
  color: var(--neutral-900);
  margin: 0;
  white-space: nowrap;
}

.hero__greeting {
  font-weight: 600;
}

.hero__tagline {
  font-family: var(--font-sans-zh);
  font-weight: 400;
  font-size: clamp(1rem, 1.5vw, 1.375rem);
  color: var(--neutral-700);
  line-height: 1.75;
  margin: 0;
}

.hero__ctas {
  display: flex;
  gap: var(--spacing-s);
  flex-wrap: wrap;
  margin-top: var(--spacing-xs);
}

/* Right — person image */
.hero__visual {
  position: absolute;
  right: 0;
  top: -24px;
  width: 44%;
  height: calc(100% + 24px);
  pointer-events: none;
}

.hero__avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
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

  .hero__headline {
    white-space: normal;
  }
}
</style>
