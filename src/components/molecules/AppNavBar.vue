<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="container navbar__inner">
      <RouterLink to="/" class="navbar__logo">
        <span class="navbar__logo-en">Loanne zhuo</span>
      </RouterLink>

      <nav class="navbar__nav" aria-label="主要導覽">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="navbar__link"
          :class="{ 'navbar__link--active': isActive(link.to) }"
        >
          {{ link.label }}
        </RouterLink>
        <a href="/resume.pdf" class="navbar__link" target="_blank">Resume</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)

const navLinks = [
  { label: 'home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'projects', to: '/projects' },
]

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background var(--transition-base), box-shadow var(--transition-base);
  padding: var(--spacing-m) 0;
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--neutral-100);
}

.navbar__inner {
  display: flex;
  align-items: center;
  gap: var(--spacing-l);
}

.navbar__logo {
  display: flex;
  align-items: baseline;
  gap: 6px;
  text-decoration: none;
  margin-right: auto;
}

.navbar__logo-en {
  font-family: var(--font-serif-en);
  font-weight: 600;
  font-style: italic;
  font-size: 1.375rem;
  color: var(--neutral-900);
  line-height: 1;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.navbar__link {
  font-family: var(--font-sans-zh);
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--neutral-600);
  padding: var(--spacing-xxs) var(--spacing-s);
  border-radius: var(--radius-round);
  transition: color var(--transition-base), background var(--transition-base);
  text-decoration: none;
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--neutral-900);
  background: var(--neutral-50);
}

.navbar__link--active {
  font-weight: 700;
}

@media (max-width: 640px) {
  .navbar__nav {
    display: none;
  }
}
</style>
