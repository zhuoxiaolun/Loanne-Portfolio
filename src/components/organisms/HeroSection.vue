<template>
  <section class="hero">
    <div class="container">
      <div class="hero__card">
        <div class="hero__content">
          <h1 class="hero__heading">Hey, it's Loanne</h1>
          <p class="hero__subtitle">{{ data.tagline }}</p>
        </div>
        <div class="hero__avatar" aria-hidden="true">
          <span class="hero__avatar-emoji">👋</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
  padding-top: calc(80px + var(--spacing-3xl));
  padding-bottom: var(--spacing-3xl);
}

.hero__card {
  background: var(--rose-100);
  border-radius: var(--radius-xl);
  padding: var(--spacing-3xl) var(--spacing-3xl);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-xl);
}

.hero__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

.hero__heading {
  font-family: var(--font-sans-zh);
  font-weight: 700;
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  color: var(--neutral-900);
  line-height: 1.3;
}

.hero__subtitle {
  font-family: var(--font-sans-zh);
  font-weight: 400;
  font-size: 1rem;
  color: var(--neutral-600);
  line-height: 1.8;
  max-width: 480px;
}

.hero__avatar {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--neutral-0);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-card);
}

.hero__avatar-emoji {
  font-size: 2.5rem;
  line-height: 1;
}

@media (max-width: 640px) {
  .hero__card {
    padding: var(--spacing-xl) var(--spacing-l);
    flex-direction: column;
    align-items: flex-start;
  }
  .hero__avatar {
    width: 60px;
    height: 60px;
  }
  .hero__avatar-emoji {
    font-size: 2rem;
  }
}
</style>
