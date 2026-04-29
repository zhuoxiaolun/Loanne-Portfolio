<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="container navbar__inner">
      <RouterLink to="/" class="navbar__logo">
        <span class="navbar__logo-en">Loanne zhuo</span>
      </RouterLink>

      <!-- Desktop nav -->
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

      <!-- Hamburger button -->
      <button
        class="navbar__hamburger"
        :class="{ 'navbar__hamburger--open': menuOpen }"
        @click="toggleMenu"
        aria-label="開啟選單"
        :aria-expanded="menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <!-- Mobile drawer -->
  <Transition name="drawer">
    <div v-if="menuOpen" class="navbar__drawer" @click.self="closeMenu">
      <nav class="navbar__drawer-nav" aria-label="手機導覽">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="navbar__drawer-link"
          :class="{ 'navbar__drawer-link--active': isActive(link.to) }"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
        <a href="/resume.pdf" class="navbar__drawer-link" target="_blank" @click="closeMenu">Resume</a>
      </nav>
    </div>
  </Transition>

  <!-- Overlay -->
  <Transition name="fade">
    <div v-if="menuOpen" class="navbar__overlay" @click="closeMenu" />
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
]

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
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
  z-index: 200;
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
  font-weight: 700;
  font-style: italic;
  font-size: 2rem;
  color: var(--lake-blue-700);
  line-height: 1;
  letter-spacing: 0.01em;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.navbar__link {
  font-family: var(--font-serif-en);
  font-style: normal;
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--lake-blue-700);
  padding: var(--spacing-xxs) var(--spacing-s);
  border-radius: var(--radius-round);
  transition: color var(--transition-base), background var(--transition-base);
  text-decoration: none;
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--neutral-900);
  background: rgba(204, 217, 239, 0.5);
}

.navbar__link--active {
  font-weight: 700;
}

/* ── Hamburger ───────────────────────────── */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 210;
}

.navbar__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--lake-blue-700);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
  transform-origin: center;
}

.navbar__hamburger--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar__hamburger--open span:nth-child(2) {
  opacity: 0;
}
.navbar__hamburger--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Drawer ──────────────────────────────── */
.navbar__overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 190;
}

.navbar__drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 75vw;
  max-width: 300px;
  background: #fff;
  z-index: 200;
  padding: 80px var(--spacing-xl) var(--spacing-xl);
  display: flex;
  flex-direction: column;
}

.navbar__drawer-nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.navbar__drawer-link {
  font-family: var(--font-serif-en);
  font-style: normal;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--lake-blue-700);
  text-decoration: none;
  padding: var(--spacing-xs) var(--spacing-s);
  border-radius: var(--radius-m);
  transition: color var(--transition-base), background var(--transition-base);
}

.navbar__drawer-link:hover,
.navbar__drawer-link--active {
  color: var(--neutral-900);
  background: rgba(204, 217, 239, 0.5);
}

/* ── Transitions ─────────────────────────── */
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ── Responsive ──────────────────────────── */
@media (max-width: 640px) {
  .navbar__nav {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
  }
}
</style>
