<template>
  <main class="home">
    <HeroSection :data="home.hero" />

    <section class="section">
      <ProjectGrid :projects="featuredProjects" />
    </section>

    <section class="section">
      <AiToolsSection />
    </section>

  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/organisms/HeroSection.vue'
import ProjectGrid from '@/components/organisms/ProjectGrid.vue'
import AiToolsSection from '@/components/organisms/AiToolsSection.vue'
import homeData from '@/data/home.json'
import type { Project } from '@/types'

const home = homeData
const featuredProjects = homeData.featuredProjects.projects as Project[]
</script>

<style scoped>
.section {
  padding-top: 0;
  padding-bottom: var(--spacing-6xl);
}
</style>
